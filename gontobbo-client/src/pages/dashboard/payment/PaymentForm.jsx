import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();
  const { user } = useAuth();

  const { parcelId } = useParams();

  const { isPending, data: parcelInfo = {} } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isPending) {
    return "...loading";
  }

  const amountInCents = parcelInfo.cost * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      setError("");
      const res = await axiosSecure.post("/create-payment-intent", {
        amountInCents,
        parcelId,
      });

      const clientSecret = res?.data?.clientSecret;
      console.log(clientSecret, "PaymentForm.jsx", 60);

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
      if (result.error) {
        setError(result?.error?.message);
      } else {
        setError("");
        if (result.paymentIntent.status == "succeeded") {
          console.log("Payment succeeded!");

          const paymentData = {
            parcelId,
            email: user?.email,
            amount: amountInCents,
            transactionId: result.paymentIntent.id,
            paymentMethod: result.paymentIntent.payment_method_types,
          };

          const paymentRes = await axiosSecure.post("/payments", paymentData);
          if (paymentRes.data.insertedId) {
            // ✅ Show SweetAlert with transaction ID
            await Swal.fire({
              icon: "success",
              title: "Payment Successful!",
              html: `<strong>Transaction ID:</strong> <code>${result.paymentIntent.id}</code>`,
              confirmButtonText: "Go to My Parcels",
            });

            // ✅ Redirect to /myParcels
            navigate("/dashboard/my-parcel");
          }
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Secure Payment
      </h2>

      <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#1a202c",
                fontFamily: '"Inter", system-ui, sans-serif',
                "::placeholder": {
                  color: "#a0aec0",
                },
              },
              invalid: {
                color: "#e53e3e",
              },
            },
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe}
        className="w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Pay
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default PaymentForm;
