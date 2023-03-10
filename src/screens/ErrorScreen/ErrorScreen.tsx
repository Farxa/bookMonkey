import { isRouteErrorResponse, useRouteError } from "react-router-dom";
export const ErrorScreen = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <h1>Something went wrong 😱</h1>;
  }
};
