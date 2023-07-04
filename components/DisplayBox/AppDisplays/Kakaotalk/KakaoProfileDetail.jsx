import { useContext } from "react";
import Link from "next/link";
import { PageContext } from "../../sections/AppMain";
import classes from "./KakaoProfileDetail.module.css";

function KakaoProfileDetail() {
  const { urlContent } = useContext(PageContext);
  return (
    <section className={classes.layout}>
      <section className={classes.mainLayout}>
        <div className={classes.profileImg}>
          <i className="bi bi-person-fill"></i>
        </div>
        <div className={classes["text_center--white"]}>철수</div>
      </section>

      <div className={classes.listLayout}>
        <div>
          <i className="bi bi-chat-fill"></i>
          <div>1:1채팅</div>
        </div>
        <div>
          <Link href={urlContent} data-tooltip="클릭!">
            <i className="bi bi-telephone-fill"></i>
            <div>통화하기</div>
          </Link>
        </div>
        <div>
          <i className="bi bi-camera-video-fill"></i>
          <div>페이스톡</div>
        </div>
        <div>
          <i className="bi bi-quote"></i>
          <div>스토리</div>
        </div>
      </div>
    </section>
  );
}

export default KakaoProfileDetail;
