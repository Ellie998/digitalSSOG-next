import { useContext } from "react";
import Link from "next/link";
import { PageContext } from "./AppMain";
import classes from "./AppMain.module.css";

const MainApps = ({ navLinkTriger }) => {
  const { urlContent, appName_kakaotalk, appName_call, appName_message } =
    useContext(PageContext);

  return (
    <section className={classes.layout}>
      <section className={classes.appLayout}>
        <div className={classes.app_row}>
          <Link
            href={navLinkTriger === appName_kakaotalk ? `${urlContent}` : ""}
            data-tooltip={navLinkTriger === appName_kakaotalk ? `클릭!` : null}>
            <div>
              <i className="bi bi-chat-fill"></i>
            </div>
          </Link>
        </div>
      </section>
      <section className={classes.navAppLayout}>
        <Link
          href={navLinkTriger === appName_call ? urlContent : ""}
          data-tooltip={navLinkTriger === appName_call ? `클릭!` : null}>
          <div>
            <i className="bi bi-telephone"></i>
          </div>
        </Link>
        <div>
          <i className="bi bi-camera"></i>
        </div>
        <div>
          <i className="bi bi-clock"></i>
        </div>
        <div>
          <i className="bi bi-browser-chrome"></i>
        </div>
        <Link
          href={navLinkTriger === appName_message ? urlContent : ""}
          data-tooltip={navLinkTriger === appName_message ? `클릭!` : null}>
          <div>
            <i className="bi bi-chat-dots"></i>
          </div>
        </Link>
      </section>
    </section>
  );
};

export default MainApps;
