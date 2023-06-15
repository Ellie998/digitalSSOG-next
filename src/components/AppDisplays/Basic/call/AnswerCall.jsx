import { useContext } from "react";
import { PageContext } from "../../sections/AppMain";
import classes from "./ComeCall.module.css";
import { NavLink } from "react-router-dom";

const AnswerCall = () => {
  const { urlContent } = useContext(PageContext);
  return (
    <section className={classes.section}>
      <p className={classes.name}>이름</p>
      <p className={classes.num}>010-0000-0000</p>
      <div className={classes.btns}>
        <NavLink to={`${urlContent}`}>
          <div data-tooltip="클릭!">
            <i className="bi bi-telephone" style={{ color: "blue" }}></i>
          </div>
        </NavLink>

        <div>
          <i className="bi bi-telephone-x" style={{ color: "red" }}></i>
        </div>
      </div>
      <div className={classes.message}>
        <p>문자 보내기</p>
      </div>
    </section>
  );
};

export default AnswerCall;
