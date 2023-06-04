import { json } from "react-router-dom";

import FunctionList from "../../components/GetData/FunctionList";

import "./main.css";
import styles from "./Index.module.css";
import { functionDataURL } from "../../data";

function Index() {
  return (
    <main>
      <section className={styles.section}>
        <h1>
          안녕하세요 💁🏻‍♀️ <br />
          디지털쏙 페이지 입니다.
        </h1>
        <p className={styles.paraMarginBottom}>
          사용하는 어플 속에 어떤 기능이 있는지 알고 있나요?
        </p>
        <ul className={styles.paraTextAlignLeft}>
          <li>
            <p>
              1️⃣ 어플 속 사용 가능한 기능, 설정 방법들을 정리하여
              알려드리겠습니다.
            </p>
          </li>
          <li>
            <p>
              2️⃣ 모바일 속 화면을 직접 눌러보며 다양한 학습을 할 수 있도록
              돕겠습니다.
            </p>
          </li>
        </ul>
      </section>
      <FunctionList />
      {/* <AppList /> */}
    </main>
  );
}

export default Index;

export async function loader({ params }) {
  const response = await fetch(functionDataURL);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const data = await response.json();

    return data;
  }
}
