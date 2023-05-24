import "../main.css";
import FunctionDetailMainInApp from "../../../components/FunctionDetailComponents/FunctionDetailMainInApp";

import { functionDataURL } from "../../../data";
import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import FunctionDetailIntroInApp from "../../../components/FunctionDetailComponents/FunctionDetailIntroInApp";

import { json } from "react-router-dom";

function FunctionDetailInApp() {
  // let location = useLocation();
  // let url = decodeURI(location.pathname);
  // const words = url.split("/");

  // const [appName, setAppName] = useState("");
  // const [functionName, setFunctionName] = useState("");

  // useEffect(() => {
  //   setAppName(words[3]);
  //   setFunctionName(words[4]);

  //   const fetchData = () => {
  //     fetch(functionDataURL)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         data.map((categoryObject) =>
  //           categoryObject.objects.map((ObjectInArray) => {
  //             if (ObjectInArray.name === functionName) {
  //               ObjectInArray.method?.map((methodObject) => {
  //                 if (methodObject.methodAppName === appName) {
  //                   setData(ObjectInArray);
  //                   setMethodData(methodObject);
  //                 }
  //               });
  //             }
  //           })
  //         );
  //       });
  //   };
  //   fetchData();
  // }, [location, appName, functionName]);

  // const [detailFunctionObject, setData] = useState([]);
  // const [detailMethodObject, setMethodData] = useState([]);

  const data = useLoaderData();
  const detailFunctionObject = data[0];
  const detailMethodObject = data[1];
  const appName = data.appName;
  const functionName = data.functionName;

  console.log(detailFunctionObject);
  console.log(detailMethodObject);
  console.log(appName);
  console.log(functionName);

  return (
    <main>
      <p>Function Detail Page</p>
      {/* <FunctionDetailIntroInApp
        functionName={detailFunctionObject.name}
        appName={appName}
        charateristic={detailFunctionObject.charateristic}
        appNames={detailFunctionObject.app}
      />
      <FunctionDetailMainInApp
        functionName={functionName}
        appName={appName}
        appMethods={detailMethodObject}
      /> */}
    </main>
  );
}

export default FunctionDetailInApp;

export async function loader({ params }) {
  const response = await fetch(functionDataURL);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const data = await response.json();

    await data.map((categoryObject) => {
      console.log(categoryObject);
      categoryObject.objects.map((ObjectInArray) => {
        if (ObjectInArray.name === params.functionName) {
          ObjectInArray.method?.map((methodObject) => {
            if (methodObject.methodAppName === params.appName) {
              return {
                ...ObjectInArray,
                ...methodObject,
                appName: params.appName,
                functionName: params.functionName,
              };
            }
          });
        }
      });
    });
  }
}
