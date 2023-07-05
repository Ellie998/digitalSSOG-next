import classes from "../Message.module.css";

import NextDescriptionLink from "../../../../../NextDescriptionLink";

function SendResend() {
  return (
    <div className={classes.layout}>
      <div className={classes.main_header}>
        <div className={classes.firstNameBox}>홍</div>
        <div className={classes.nameBox}>홍길순</div>
        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className={classes.messages}></div>
      <div className={classes.appNav}>
        <div className={classes.navOptions}>
          <div>
            <i className="bi bi-image"></i>
          </div>
          <div>
            <i className="bi bi-camera"></i>
          </div>
          <div>
            <i className="bi bi-plus"></i>
          </div>
        </div>

        <div className={classes.inputBox}>
          <div>
            <input
              readOnly
              value="결혼식 주소입니다. OO특별시 OO구 
            OO로 OOO번길 O, OOO 컨벤션"></input>
          </div>
          <div>
            <i className="bi bi-emoji-smile"></i>
          </div>
        </div>

        <NextDescriptionLink nextOption={true}>
          <div className={classes.sendIcon} data-tooltip="클릭!">
            <i className="bi bi-send"></i>
          </div>
        </NextDescriptionLink>
      </div>
    </div>
  );
}

export default SendResend;
