import classes from "./FunctionList.module.css";
import MakeList from "./MakeList";
import MakeListInCategory from "./MakeListInCategory";
function FunctionList() {
  return (
    <section className={classes.layout}>
      <h1>카테고리별 사용 가능한 기능</h1>
      <p>
        기능을 제공하는 어플 목록, 사용 방법을 알고 싶은 기능의 이름을
        클릭하세요.
      </p>
      <div className={`${classes.listBox} ${classes.boxShadow}`}>
        <MakeList FunctionOrApp={"function"}></MakeList>
        <MakeListInCategory FunctionOrApp={"function"}></MakeListInCategory>
      </div>
    </section>
  );
}

export default FunctionList;
