/* eslint-disable react/prop-types */
import classes from "./index.module.css";

import Phone from "stories/phone/molecules/Phone";
import IconBottom from "stories/phone/molecules/IconBottom";
import TargetBox from "stories/phone/atoms/TargetBox";

function Profile({ target = { call: false, chat: false } }) {
  return (
    <Phone>
      <section className={classes.layout}>
        <section className={classes.mainLayout}>
          <IconBottom
            icon={{
              name: "person-fill",
              style: {
                color: "rgb(226, 243, 255)",
                fontSize: "24px",
                margin: "0 auto",
                backgroundColor: "rgb(193, 229, 255)",
                borderRadius: "22px",
                width: "50px",
                height: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0 0 4px rgb(164, 164, 164)",
              },
            }}
            description={{
              content: "철수",
              style: { color: "white", fontSize: "1rem" },
            }}
          />
        </section>

        <div className={classes.listLayout}>
          <TargetBox condition={target.chat} isNextTriger={true}>
            <IconBottom
              icon={{
                name: "chat-fill",
                style: {
                  color: "white",
                  fontSize: "16px",
                },
              }}
              description={{
                content: "1:1채팅",
                style: {
                  color: "white",
                  fontSize: "8px",
                  fontWeight: "bold",
                },
              }}
            />
          </TargetBox>
          <TargetBox condition={target.call} isNextTriger={true}>
            <IconBottom
              style={{ padding: "2px" }}
              icon={{
                name: "telephone-fill",
                style: {
                  color: "white",
                  fontSize: "16px",
                },
              }}
              description={{
                content: "통화하기",
                style: {
                  color: "white",
                  fontSize: "8px",
                  fontWeight: "bold",
                },
              }}
            />
          </TargetBox>
          <IconBottom
            icon={{
              name: "camera-video-fill",
              style: {
                color: "white",
                fontSize: "16px",
              },
            }}
            description={{
              content: "페이스톡",
              style: {
                color: "white",
                fontSize: "8px",
                fontWeight: "bold",
              },
            }}
          />
          <IconBottom
            icon={{
              name: "quote",
              style: {
                color: "white",
                fontSize: "16px",
              },
            }}
            description={{
              content: "스토리",
              style: {
                color: "white",
                fontSize: "8px",
                fontWeight: "bold",
              },
            }}
          />
        </div>
      </section>
    </Phone>
  );
}

export default Profile;
