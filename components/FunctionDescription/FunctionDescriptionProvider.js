"use client";

import { Suspense } from "react";
import FunctionDescriptionPage from "./FunctionDescriptionPage";
import UrlContextProvider from "../page_context/UrlContextProvider";

export default function FunctionDescriptionProvider() {
  return (
    <UrlContextProvider>
      <Suspense>
        <FunctionDescriptionPage />
      </Suspense>
    </UrlContextProvider>
  );
}
