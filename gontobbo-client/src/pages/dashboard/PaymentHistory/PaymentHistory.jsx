import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaMoneyBill, FaHashtag, FaClock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Spinner from "../../shared/Spinner";
import Error from "../../shared/Error";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: payments = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  if (isLoading) return <Spinner />;
  if (isError) return <Error message={error?.message} retry={refetch} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        💳 Payment History
      </h2>

      {payments.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">
          No payment history found.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-base-200 shadow-xl">
          <table className="table table-zebra w-full min-w-[900px]">
            <thead className="bg-base-200 text-base text-gray-700 font-semibold">
              <tr>
                <th>#</th>
                <th>Parcel</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Txn ID</th>
                <th>Paid At</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {payments.map((payment, idx) => (
                <tr
                  key={payment._id}
                  className="hover:bg-base-100 transition-all duration-200"
                >
                  <td className="font-medium text-center">{idx + 1}</td>

                  <td className="text-blue-600 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <FaHashtag className="text-gray-400" />
                      {payment.parcelId.slice(-6)}
                    </div>
                  </td>

                  <td className="whitespace-nowrap">
                    <div className="flex items-center gap-1 text-gray-600">
                      <MdOutlineEmail />
                      <span className="truncate max-w-[180px]">
                        {payment.email}
                      </span>
                    </div>
                  </td>

                  <td className="text-green-600 font-semibold whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <FaMoneyBill className="text-emerald-400" />$
                      {(payment.amount / 100).toFixed(2)}
                    </div>
                  </td>

                  <td className="whitespace-nowrap">
                    {payment.paymentMethod?.map((method, i) => (
                      <span
                        key={i}
                        className="badge badge-sm badge-outline badge-info capitalize"
                      >
                        {method}
                      </span>
                    ))}
                  </td>

                  <td className="text-xs text-gray-500 max-w-[140px] truncate">
                    {payment.transactionId}
                  </td>

                  <td className="text-gray-500 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <FaClock />
                      {new Date(payment.paid_at).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
