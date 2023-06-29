import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PageContext } from "./AppMain";
import classes from "./AppMain.module.css";

const MainApps = ({ navLinkTriger }) => {
  const { urlContent, appName_kakaotalk, appName_call, appName_message } =
    useContext(PageContext);

  return (
    // <section className={classes.layout}>
    //   <section className={classes.appLayout}>
    //     <div className={classes.app_row}>
    //       <NavLink
    //         to={
    //           appName === appName_kakaotalk &&
    //           realFunctionName === functionName_makeCall &&
    //           `${urlContent}`
    //         }
    //         data-tooltip={
    //           appName === appName_kakaotalk &&
    //           realFunctionName === functionName_makeCall
    //             ? `클릭!`
    //             : null
    //         }>
    //         <div>
    //           <i className="bi bi-chat-fill"></i>
    //         </div>
    //       </NavLink>
    //     </div>
    //   </section>
    //   <section className={classes.navAppLayout}>
    //     <NavLink
    //       to={
    //         appName === appName_basic &&
    //         (realFunctionName === functionName_makeCall ||
    //           realFunctionName === functionName_makeVideoCall)
    //           ? urlContent
    //           : null
    //       }
    //       data-tooltip={
    //         appName === appName_basic &&
    //         (realFunctionName === functionName_makeCall ||
    //           realFunctionName === functionName_makeVideoCall)
    //           ? `클릭!`
    //           : null
    //       }>
    //       <div>
    //         <i className="bi bi-telephone"></i>
    //       </div>
    //     </NavLink>
    //     <div>
    //       <i className="bi bi-camera"></i>
    //     </div>
    //     <div>
    //       <i className="bi bi-clock"></i>
    //     </div>
    //     <div>
    //       <i className="bi bi-browser-chrome"></i>
    //     </div>
    //     <NavLink
    //       to={
    //         appName === appName_basic &&
    //         (realFunctionName === functionName_sendMessage ||
    //           realFunctionName === functionName_seeMessage ||
    //           realFunctionName === functionName_reserveMessage ||
    //           realFunctionName === functionName_resendMessage ||
    //           realFunctionName === functionName_sendImg ||
    //           realFunctionName === functionName_sendAudio ||
    //           realFunctionName === functionName_sendPhoneNum)
    //           ? urlContent
    //           : null
    //       }
    //       data-tooltip={
    //         appName === appName_basic &&
    //         (realFunctionName === functionName_sendMessage ||
    //           realFunctionName === functionName_seeMessage ||
    //           realFunctionName === functionName_reserveMessage ||
    //           realFunctionName === functionName_resendMessage ||
    //           realFunctionName === functionName_sendImg ||
    //           realFunctionName === functionName_sendAudio ||
    //           realFunctionName === functionName_sendPhoneNum)
    //           ? `클릭!`
    //           : null
    //       }>
    //       <div>
    //         <i className="bi bi-chat-dots"></i>
    //       </div>
    //     </NavLink>
    //   </section>
    // </section>
    <section className={classes.layout}>
      <section className={classes.appLayout}>
        <div className={classes.app_row}>
          <NavLink
            to={navLinkTriger === appName_kakaotalk && `${urlContent}`}
            data-tooltip={navLinkTriger === appName_kakaotalk ? `클릭!` : null}>
            <div>
              <i className="bi bi-chat-fill"></i>
            </div>
          </NavLink>
        </div>
      </section>
      <section className={classes.navAppLayout}>
        <NavLink
          to={navLinkTriger === appName_call ? urlContent : null}
          data-tooltip={navLinkTriger === appName_call ? `클릭!` : null}>
          <div>
            <i className="bi bi-telephone"></i>
          </div>
        </NavLink>
        <div>
          <i className="bi bi-camera"></i>
        </div>
        <div>
          <i className="bi bi-clock"></i>
        </div>
        <div>
          <i className="bi bi-browser-chrome"></i>
        </div>
        <NavLink
          to={navLinkTriger === appName_message ? urlContent : null}
          data-tooltip={navLinkTriger === appName_message ? `클릭!` : null}>
          <div>
            <i className="bi bi-chat-dots"></i>
          </div>
        </NavLink>
      </section>
    </section>
  );
};

export default MainApps;
