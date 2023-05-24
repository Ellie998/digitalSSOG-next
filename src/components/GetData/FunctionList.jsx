import styles from "./FunctionList.module.css";
import MakeList from "./MakeList";
import MakeListInCategory from "./MakeListInCategory";
function FunctionList() {
  return (
    <section className={styles.FunctionList}>
      <h1>카테고리별 사용 가능한 기능</h1>
      <p>
        기능 이름을 클릭하면 기능에 대한 설명, 기능을 제공하는 어플 목록, 기능을
        사용하는 방법을 상세히 알려줍니다.
      </p>
      <div>
        <MakeList FunctionOrApp={"function"}></MakeList>
        <MakeListInCategory FunctionOrApp={"function"}></MakeListInCategory>
      </div>
    </section>
  );
}

export default FunctionList;
