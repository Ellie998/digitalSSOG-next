import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const pathArray = location.pathname.split("/");

  useEffect(() => {
    location.search === "" &&
      pathArray.length !== 5 &&
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
  }, [location, pathArray]);

  return null;
}
