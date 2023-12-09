const FunctionEditPage = ({
  params,
}: {
  params: {
    functionName: String;
  };
}) => {
  return <div>{params.functionName} Page</div>;
};

export default FunctionEditPage;
