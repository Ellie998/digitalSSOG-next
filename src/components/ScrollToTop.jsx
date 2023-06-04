import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ScrollToTop() {
  const params = useParams();

  console.log(params.descriptionId === undefined);
  console.log(params.descriptionId);

  useEffect(() => {
    params.descriptionId === undefined && window.scrollTo(0, 0);
  }, [params]);

  return null;
}
