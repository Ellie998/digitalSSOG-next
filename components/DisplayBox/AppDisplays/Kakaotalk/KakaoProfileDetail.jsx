import classes from "./KakaoProfileDetail.module.css";

import NextDescriptionLink from "../../../NextDescriptionLink";

function KakaoProfileDetail() {
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
          <NextDescriptionLink nextOption={true}>
            <i className="bi bi-telephone-fill"></i>
            <div>통화하기</div>
          </NextDescriptionLink>
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
