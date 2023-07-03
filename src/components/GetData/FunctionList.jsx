import classes from "./FunctionList.module.css";
import MakeCategory from "./MakeCategory";
import MakeListInCategory from "./MakeListInCategory";
function FunctionList() {
  return (
    <section className={`${classes.layout} ${classes.note}`}>
      <div className={classes.noteHoles}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.noteContent}>
        <h1 className={classes.title}>스마트 기기로 사용 가능한 기능들</h1>
        <div className={classes.subTitle}>
          카테고리를 누르면 카테고리에 속하는 기능들을 볼 수 있습니다.
        </div>

        <div className={`${classes.postIt_note}`}>
          <MakeCategory FunctionOrApp={"function"}></MakeCategory>

          <MakeListInCategory FunctionOrApp={"function"}></MakeListInCategory>
        </div>
      </div>
    </section>
  );
}

export default FunctionList;
