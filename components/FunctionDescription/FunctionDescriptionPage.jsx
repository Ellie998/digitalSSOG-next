"use client";

import { useContext, useEffect, useState } from "react";

import UrlContext from "../page_context/UrlContext";

import ShareContainer from "../share/ShareContainer";

import FunctionIntro from "stories/page/templates/FunctionIntro";
import FunctionMain from "stories/page/templates/FunctionMain";

// eslint-disable-next-line no-undef
const data = require("/public/data/functionData.json");

function FunctionDescriptionPage() {
  const { functionName, setMyAppName, setMyMethodId, setMyDescriptionId } =
    useContext(UrlContext);
  const [detailFunctionObject, setData] = useState([]);

  useEffect(() => {
    data.forEach((categoryObject) => {
      if (
        categoryObject.category !== "new" &&
        categoryObject.category !== "hot"
      ) {
        categoryObject.objects?.forEach((ObjectInArray) => {
          if (
            ObjectInArray.name.slice(2) ===
            functionName.replace("%2C", ",").replaceAll("-", " ")
          ) {
            setData(ObjectInArray);
            return;
          }
        });
      }
    });
  }, []);

  return (
    <main>
      <FunctionIntro
        detailFunctionObject={detailFunctionObject}
        setMyAppName={setMyAppName}
        setMyMethodId={setMyMethodId}
        setMyDescriptionId={setMyDescriptionId}
      />
      <FunctionMain detailFunctionObject={detailFunctionObject} />
      <ShareContainer />
    </main>
  );
}

export default FunctionDescriptionPage;
