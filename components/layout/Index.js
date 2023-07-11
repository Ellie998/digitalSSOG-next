import FunctionList from "../IndexFunctionList/FunctionList";

import classes from "./Index.module.css";
function Index() {
  return (
    <main>
      <section className={classes.layout}>
        <h1 className="title">
          안녕하세요 💁🏻‍♀️ <br />
          디지털쏙 페이지 입니다.
        </h1>
        <p className="subTitle">
          사용중인 스마트 기기로 무엇을 할 수 있는지 알고 계시나요?
        </p>
        <ul className={`${classes.listWrap}`}>
          <li className={`${classes.postIt} ${classes.boxShadow}`}>
            <p className="text-xl mb-5 text-gray-700 break-keep">
              디지털쏙 페이지의 <br />
              핵심 포인트 1️⃣
            </p>
            <h2>스마트 기기로 할 수 있는 기능들을 정리했습니다.</h2>
          </li>
          <li className={`${classes.postIt} ${classes.boxShadow}`}>
            <p className="text-xl mb-5 text-gray-700 break-keep">
              디지털쏙 페이지의
              <br />
              핵심 포인트 2️⃣
            </p>
            <h2>화면을 직접 눌러보며 기능을 미리 경험할 수 있습니다.</h2>
          </li>
        </ul>
      </section>
      <FunctionList />
    </main>
  );
}

export default Index;
