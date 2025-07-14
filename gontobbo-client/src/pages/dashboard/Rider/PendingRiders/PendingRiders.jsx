import { useState } from "react";

const PendingRiders = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        {open ? "Close" : "View Details"}
      </button>
      {open && (
        <dialog id="riderDetailsModal" className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-xl mb-2">Rider Details</h3>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> Junaid Hasan
              </p>
              <p>
                <strong>Email:</strong> junaid@example.com
              </p>
              <p>
                <strong>Phone:</strong> 01712345678
              </p>
              <p>
                <strong>Age:</strong> 27
              </p>
              <p>
                <strong>NID:</strong> 1999887766554
              </p>
              <p>
                <strong>Bike Brand:</strong> Yamaha FZS V3
              </p>
              <p>
                <strong>Bike Registration:</strong> DHA-12345
              </p>
              <p>
                <strong>Region:</strong> Mirpur
              </p>
              <p>
                <strong>District:</strong> Dhaka
              </p>
              <p>
                <strong>Applied At:</strong>{" "}
                {new Date("2025-07-12T10:30:00Z").toLocaleString()}
              </p>
              <p>
                <strong>Note:</strong> Available full-time, prefers night
                shifts.
              </p>
            </div>

            <div className="modal-action mt-4">
              <button
                onClick={() => setOpen(!open)}
                className="btn btn-outline"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default PendingRiders;
