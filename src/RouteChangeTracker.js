import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGa from "react-ga";

const ReactChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
    }
    setInitialized(true);
  }, []);
  useEffect(() => {
    if (initialized) {
      ReactGa.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default ReactChangeTracker;
