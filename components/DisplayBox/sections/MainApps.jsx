import { useContext } from "react";
import classes from "./AppMain.module.css";
import UrlContext from "../../page_context/UrlContext";
import NextDescriptionLink from "../AppDisplays/components/NextDescriptionLink";

const MainApps = ({ navLinkTriger }) => {
  const { appName_kakaotalk, appName_call, appName_message } =
    useContext(UrlContext);

  return (
    <section className={classes.layout}>
      <section className={classes.appLayout}>
        <div className={classes.app_row}>
          <NextDescriptionLink nextOption={navLinkTriger === appName_kakaotalk}>
            <div>
              <i className="bi bi-chat-fill"></i>
            </div>
          </NextDescriptionLink>
        </div>
      </section>
      <section className={classes.navAppLayout}>
        <NextDescriptionLink nextOption={navLinkTriger === appName_call}>
          <div>
            <i className="bi bi-telephone"></i>
          </div>
        </NextDescriptionLink>
        <div>
          <i className="bi bi-camera"></i>
        </div>
        <div>
          <i className="bi bi-clock"></i>
        </div>
        <div>
          <i className="bi bi-browser-chrome"></i>
        </div>
        <NextDescriptionLink nextOption={navLinkTriger === appName_message}>
          <div>
            <i className="bi bi-chat-dots"></i>
          </div>
        </NextDescriptionLink>
      </section>
    </section>
  );
};

export default MainApps;
