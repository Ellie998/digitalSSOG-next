import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <main style={{ textAlign: "center" }}>
      <h1>Error Occured!</h1>
      <p>{error.statusText}</p>
    </main>
  );
};

export default ErrorPage;
