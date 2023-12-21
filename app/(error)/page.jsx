"use client";

const ErrorPage = ({ statusCode }) => {
  return (
    <main style={{ textAlign: "center" }}>
      <h1>Error Occured!</h1>
      <p>{statusCode}</p>
    </main>
  );
};

export default ErrorPage;
