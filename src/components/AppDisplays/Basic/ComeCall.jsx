import classes from "./ComeCall.module.css";

const ComeCall = ({ functionName, appName }) => {
  return (
    <section className={classes.section}>
      <p className={classes.name}>이름</p>
      <p className={classes.num}>010-0000-0000</p>
      <div className={classes.btns}>
        <div>
          <i className="bi bi-telephone" style={{ color: "blue" }}></i>
        </div>

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

export default ComeCall;
