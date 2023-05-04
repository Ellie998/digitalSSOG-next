import "../main.css";
import FunctionDetailIntro from "../../../components/FunctionDetailComponents/FunctionDetailIntro";
import FunctionDetailMain from "../../../components/FunctionDetailComponents/FunctionDetailMain";
import { functionDataURL } from "../../../data";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FunctionDetail() {
  let location = useLocation();
  let url = decodeURI(location.pathname);
  const words = url.split("/");

  const functionName = words[3];
  const descriptionName = words[4];

  const [detailFunctionObject, setData] = useState([]);

  const fetchData = () => {
    fetch(functionDataURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.map((categoryObject) =>
          categoryObject.objects.map((ObjectInArray) => {
            if (ObjectInArray.name == functionName) {
              setData(ObjectInArray);
            }
          })
        );
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <FunctionDetailIntro
        name={detailFunctionObject.name}
        charateristic={detailFunctionObject.charateristic}
        appNames={detailFunctionObject.app}
      />
      <FunctionDetailMain
        name={detailFunctionObject.name}
        functionMethods={detailFunctionObject.method}
      />
    </main>
  );
}

export default FunctionDetail;
