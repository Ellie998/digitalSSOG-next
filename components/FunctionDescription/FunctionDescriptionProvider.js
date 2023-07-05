"use client";

import FunctionDescriptionPage from "../layout/FunctionDescriptionPage";
import UrlContextProvider from "../page_context/UrlContextProvider";

export default function FunctionDescriptionProvider() {
  return (
    <UrlContextProvider>
      <FunctionDescriptionPage />
    </UrlContextProvider>
  );
}
