"use client";
import H1 from "stories/page/atoms/H1";
import SubTitle from "stories/page/atoms/SubTitle";
import FunctionList from "components/IndexFunctionList/FunctionList";

import classes from "./Index.module.css";
function Index() {
  return (
    <main>
      <section className={classes.layout}>
        <H1>
          안녕하세요 💁🏻‍♀️ <br />
          디지털쏙 페이지 입니다.
        </H1>
        <SubTitle>
          사용중인 스마트 기기로 무엇을 할 수 있는지 알고 계시나요?
        </SubTitle>

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
        {/* <div className=" text-left mx-auto w-fit mt-[300px] mb-20 max-sm:mx-10">
          <p>
            점점 디지털화 되어가는 시대,
            <br />
            스마트 기기의 사용법을 익히고 활용하는 능력은 필수적입니다.
            <br />
            <br />
            디지털쏙 페이지를 통해
            <br />
            세상의 변화에 보다 쉽게 적응할 수 있도록 돕고 싶습니다.
            <br />
            <br />
            페이지에 방문해 주셔서 감사합니다.
            <br />
            마음껏 눌러보고 체험하세요.
          </p>
        </div> */}
      </section>
      <FunctionList />
    </main>
  );
}

export default Index;
