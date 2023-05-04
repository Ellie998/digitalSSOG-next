import "../main.css";
import FunctionDetailMainInApp from "../../../components/FunctionDetailComponents/FunctionDetailMainInApp";

import { functionDataURL } from "../../../data";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FunctionDetailIntroInApp from "../../../components/FunctionDetailComponents/FunctionDetailIntroInApp";

function FunctionDetailInApp() {
  let location = useLocation();
  let url = decodeURI(location.pathname);
  const words = url.split("/");

  const [appName, setAppName] = useState("");
  const [functionName, setFunctionName] = useState("");

  useEffect(() => {
    setAppName(words[3]);
    setFunctionName(words[4]);

    const fetchData = () => {
      fetch(functionDataURL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.map((categoryObject) =>
            categoryObject.objects.map((ObjectInArray) => {
              if (ObjectInArray.name === functionName) {
                ObjectInArray.method?.map((methodObject) => {
                  if (methodObject.methodAppName === appName) {
                    setData(ObjectInArray);
                    setMethodData(methodObject);
                  }
                });
              }
            })
          );
        });
    };
    fetchData();
  }, [location, appName, functionName]);

  const [detailFunctionObject, setData] = useState([]);
  const [detailMethodObject, setMethodData] = useState([]);

  return (
    <main>
      <FunctionDetailIntroInApp
        functionName={detailFunctionObject.name}
        appName={appName}
        charateristic={detailFunctionObject.charateristic}
        appNames={detailFunctionObject.app}
      />
      <FunctionDetailMainInApp
        functionName={functionName}
        appName={appName}
        appMethods={detailMethodObject}
      />
    </main>
  );
}

export default FunctionDetailInApp;
