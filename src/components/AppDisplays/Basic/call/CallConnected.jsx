import classes from "./CallConnected.module.css";

const CallConnected = ({
  functionName,
  appName,
  methodId,
  realFunctionName,
}) => {
  return (
    <section className={classes.layout}>
      <div className={classes.headerNav}>...</div>
      <div className={classes.phoneNum}>
        <div>010-0000-0000</div>
      </div>
      <div className={classes.main_optionBox}>
        <div>
          <i className="bi bi-cassette"></i> <p>녹음</p>
        </div>
        <div>
          <i className="bi bi-camera-video"></i> <p>영상통화</p>
        </div>
        <div>
          <i className="bi bi-bluetooth"></i> <p>블루투스</p>
        </div>

        <div>
          <i className="bi bi-volume-up"></i> <p>스피커</p>
        </div>
        <div>
          <i className="bi bi-mic-mute"></i> <p>내 소리 차단</p>
        </div>
        <div>
          <i className="bi bi-grip-horizontal"></i>
          <p>키패드</p>
        </div>

        <div className={classes["main_optionIcon--redBack"]}>
          <i className="bi bi-telephone-x"></i>
        </div>
      </div>
    </section>
  );
};

export default CallConnected;
