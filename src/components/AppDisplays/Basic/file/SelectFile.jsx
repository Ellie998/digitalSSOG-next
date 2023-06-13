import classes from "./SelectFile.module.css";
import { NavLink } from "react-router-dom";

function SelectFile({ functionName, appName }) {
  const realFunctionName = functionName.slice(2);
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <section className={classes.mainLayout}>
        <div className={classes.headerLayout}>
          <div className={classes.headerTop}>
            <div>
              <div>
                <i className="bi bi-list"></i>
              </div>
            </div>
            <div>최근</div>
            <div>
              <div>
                <i className="bi bi-search"></i>
              </div>
            </div>
            <div>
              <div>
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </div>
          </div>
          <div className={classes.headerFilter}>
            <div>
              <div>
                <i className="bi bi-file-earmark"></i>
              </div>
              <div>대용량 파일</div>
            </div>
            <div>
              <div>
                <i className="bi bi-clock-history"></i>
              </div>
              <div>이번 주</div>
            </div>
          </div>
          <div className={classes.headerTap}>
            <div>개인</div>
            <div>직장</div>
          </div>
        </div>
        <div className={classes.optionLayout}>
          <div>다른 앱의 파일 탐색</div>
          <div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-bug"></i>
              </div>
              <div>버그 신고</div>
            </div>
            <div>
              <NavLink
                data-tooltip={
                  appName === "기본" &&
                  realFunctionName === "이미지, 동영상 전송"
                    ? `클릭!`
                    : null
                }
                to={
                  appName === "기본" &&
                  realFunctionName === "이미지, 동영상 전송"
                    ? `/description/${functionName}/${appName}/5`
                    : null
                }>
                <div className={classes.iconWrap}>
                  <i className="bi bi-flower3"></i>
                </div>
                <div>갤러리</div>
              </NavLink>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-folder"></i>
              </div>
              <div>내 파일</div>
            </div>
          </div>
        </div>
        <div className={classes.imgLayout}>
          <div>
            <div>최근 이미지</div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-card-list"></i>
                {/* <i className="bi bi-grid-3x2"></i> */}
              </div>
            </div>
          </div>
          <div className={`${classes.imgListsGallery} ${classes.imgLists}`}>
            {numArray.map(() => (
              <div>
                <div></div>
                {/* <div>Img title</div>
              <div>Img description</div> */}
                <div className={classes.iconWrap}>
                  <i className="bi bi-arrows-fullscreen"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectFile;
