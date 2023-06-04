import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const pathArray = location.pathname.split("/");

  console.log(location.search);

  useEffect(() => {
    location.search === "" && pathArray.length !== 5 && window.scrollTo(0, 0);
  }, [location, pathArray]);

  return null;
}
