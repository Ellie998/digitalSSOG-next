import Footer from "./Footer";
import Header from "./Header";
import classes from "./MyLayout.module.css";

const MyLayout = ({ children }) => {
  return (
    <div className={classes.layout} id="pcScrollTarget">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MyLayout;
