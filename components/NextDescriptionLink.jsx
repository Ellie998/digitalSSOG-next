// components/NextDescriptionLink.jsx
import React, { useContext } from "react";
import UrlContext from "./page_context/UrlContext";
import NoScrollLink from "./NoScrollLink";

/**Get children and nextOption */
const NextDescriptionLink = ({ children, nextOption }) => {
  const { urlContent } = useContext(UrlContext);
  return (
    <NoScrollLink
      href={nextOption ? urlContent : ""}
      tooltip={nextOption ? "클릭" : null}>
      {children}
    </NoScrollLink>
  );
};

export default NextDescriptionLink;
