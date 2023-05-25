import { Outlet } from "react-router-dom";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

function RootLayout({ children }) {
  return (
    <>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;
