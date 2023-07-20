import classes from "./AppMain.module.css";
import TargetContent from "../AppDisplays/components/TargetContent";

const MainApps = ({ appName_kakaotalk, appName_call, appName_message }) => {
  return (
    <section className={classes.layout}>
      <section className={classes.appLayout}>
        <div className={classes.app_row}>
          <TargetContent
            targetOption={appName_kakaotalk}
            isNextDescriptionLink={true}>
            <div>
              <i className="bi bi-chat-fill"></i>
            </div>
          </TargetContent>
        </div>
      </section>
      <section className={classes.navAppLayout}>
        <TargetContent targetOption={appName_call} isNextDescriptionLink={true}>
          <div>
            <i className="bi bi-telephone"></i>
          </div>
        </TargetContent>
        <div>
          <i className="bi bi-camera"></i>
        </div>
        <div>
          <i className="bi bi-clock"></i>
        </div>
        <div>
          <i className="bi bi-browser-chrome"></i>
        </div>

        <TargetContent
          targetOption={appName_message}
          isNextDescriptionLink={true}>
          <div>
            <i className="bi bi-chat-dots"></i>
          </div>
        </TargetContent>
      </section>
    </section>
  );
};

export default MainApps;
