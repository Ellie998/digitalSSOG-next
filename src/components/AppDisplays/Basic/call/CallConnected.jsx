import classes from "./CallConnected.module.css";

const CallConnected = ({ functionName, appName }) => {
  return (
    <section className={classes.section}>
      <div className={classes.etcBtn}>...</div>
      <div className={classes.phoneNum}>
        <h3>010-0000-0000</h3>
      </div>
      <div className={classes.controlBox}>
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

        <div className={classes.endCallBtn}>
          <i className="bi bi-telephone-x"></i>
        </div>
      </div>
    </section>
  );
};

export default CallConnected;
