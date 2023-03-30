import { Outlet } from "react-router-dom";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
