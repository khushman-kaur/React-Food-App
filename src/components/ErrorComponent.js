import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="errorElement">
      <h1>Oops!</h1>
      <h2>Something Went Wrong.</h2>
      <p>
        Error::{err.status}:{err.statusText}
      </p>
    </div>
  );
};

export default ErrorComponent;
