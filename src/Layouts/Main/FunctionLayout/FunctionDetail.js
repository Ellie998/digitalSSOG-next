import "../main.css";
import FunctionDetailIntro from "../../../components/FunctionDetailComponents/FunctionDetailIntro";
import FunctionDetailMain from "../../../components/FunctionDetailComponents/FunctionDetailMain";

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function FunctionDetail() {
  const params = useParams();
  const data = useLoaderData();

  const functionName = params.functionName;

  const [detailFunctionObject, setData] = useState([]);

  useEffect(() => {
    data.map((categoryObject) =>
      categoryObject.objects?.map((ObjectInArray) => {
        if (ObjectInArray.name === functionName) {
          setData(ObjectInArray);
        }
      })
    );
  }, [data, functionName]);

  return (
    <main>
      <FunctionDetailIntro
        name={detailFunctionObject.name}
        charateristic={detailFunctionObject.charateristic}
        appNames={detailFunctionObject.app}
      />
      <FunctionDetailMain functionMethods={detailFunctionObject.method} />
    </main>
  );
}

export default FunctionDetail;
