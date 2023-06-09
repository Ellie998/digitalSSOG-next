import { useState } from "react";
import classes from "../send-message/MessageInsert.module.css";
import { NavLink } from "react-router-dom";

function SelectResend({ functionName, appName }) {
  const [isOvered, setIsOvered] = useState(false);
  function mouseOverHandler(event) {
    setTimeout(() => {
      setIsOvered(true);
    }, 1000);
  }
  function backClickHandler() {
    setIsOvered(false);
  }

  return (
    <section className={classes.appMain}>
      <div className={classes.appHeader}>
        <div className={classes.firstNameBox}>홍</div>
        <div className={classes.nameBox}>홍길순</div>
        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className={classes.messages} onClick={backClickHandler}>
        <div className={classes.getMessage}>
          <div onMouseOver={mouseOverHandler}>
            결혼식 주소입니다. <br></br>OO특별시 OO구 <br></br>
            OO로 OOO번길 O, OOO 컨벤션
          </div>
          <div>오전 8:03</div>
        </div>
        {isOvered && (
          <div className={classes.options}>
            <div>삭제</div>
            <div>답장</div>
            <div>글자 복사</div>
            <div>텍스트 선택</div>
            <NavLink to={`/description/${functionName}/${appName}/3`}>
              <div data-tooltip-left="클릭!">전달</div>
            </NavLink>
            <div>공유</div>
            <div>별표하기</div>
          </div>
        )}
      </div>
      <div className={classes.appNav}>
        <ul className={classes.navOptions}>
          <li>
            <i className="bi bi-image"></i>
          </li>
          <li>
            <i className="bi bi-camera"></i>
          </li>
          <li>
            <i className="bi bi-plus"></i>
          </li>
        </ul>

        <ul className={classes.inputBox}>
          <li>
            <input></input>
          </li>
          <li>
            <i className="bi bi-emoji-smile"></i>
          </li>
        </ul>

        <div className={classes.soundIcon}>
          <i className="bi bi-soundwave"></i>
        </div>
      </div>
    </section>
  );
}

export default SelectResend;
