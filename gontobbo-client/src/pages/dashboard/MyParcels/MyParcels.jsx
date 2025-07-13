import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { showErrorAlert, showSuccessAlert } from "../../../utils/swal";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    data: parcels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-parcels", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res?.data;
    },
  });

  const handleView = (id) => {
    console.log("View parcel", id);
  };

  const handlePay = (id) => {
    console.log("Proceed to payment for", id);
    navigate(`/dashboard/payment/${id}`);
  };

  const handleDelete = async (id) => {
    console.log(`Delete parcel ${id}`);

    const confirm = await showErrorAlert({
      title: "Are you sure?",
      icon: "warning",
      text: "This parcel will be permanently deleted!",
      showConfirmButton: true,
      confirmButtonText: "Yes, delete it",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    });
    console.log(confirm, "confirm");
    if (confirm.isConfirmed) {
      try {
        const result = await axiosSecure.delete(`/parcels/${id}`);
        console.log(result?.data, "MyParcels.jsx", 45);
        if (result?.data?.deletedCount) {
          showSuccessAlert({
            title: "Deleted!",
            text: "Parcel has been deleted.",
          });
          refetch();
        }
      } catch (error) {
        console.log(`error`, error);
      }
    }
  };

  return (
    <div className="p-4 overflow-x-aut">
      <h2 className="text-2xl font-semibold mb-4">
        📦 My Parcels ({parcels.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra min-w-[700px] w-full shadow-xl rounded-lg">
          <thead className="bg-base-200">
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Created At</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel._id} className="hover">
                <td className="font-medium">{parcel.title}</td>
                <td>
                  <span className="badge badge-info h-fit capitalize">
                    {parcel.type}
                  </span>
                </td>
                <td>{format(new Date(parcel.creation_date), "PPP p")}</td>
                <td>৳{parcel.cost}</td>
                <td>
                  {parcel.payment_status === "paid" ? (
                    <span className="badge badge-success">Paid</span>
                  ) : (
                    <span className="badge badge-warning">Unpaid</span>
                  )}
                </td>
                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleView(parcel._id)}
                      className="btn btn-sm btn-outline btn-success"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handlePay(parcel._id)}
                      className="btn btn-sm btn-outline btn-info "
                    >
                      Pay
                    </button>
                    <button
                      onClick={() => handleDelete(parcel._id)}
                      className="btn btn-sm btn-outline btn-error "
                    >
                      X
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isLoading && (
          <div className="mt-4 text-center text-sm text-gray-500">
            Loading parcels...
          </div>
        )}
      </div>
    </div>
  );
};

export default MyParcels;
