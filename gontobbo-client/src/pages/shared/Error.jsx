import { useNavigate } from "react-router";

const Error = ({ message = "Something went wrong!", retry }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-[75vh]">
      <div className="max-w-md w-full p-6 rounded-xl shadow bg-red-100 border border-red-400 text-center">
        <h2 className="text-2xl font-bold text-red-700">🚫 Error</h2>
        <p className="text-sm mt-2 text-red-600">{message}</p>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {retry && (
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={retry}
            >
              Retry
            </button>
          )}
          <button
            className="btn btn-sm btn-outline"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <button
            className="btn btn-sm btn-outline btn-primary"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
