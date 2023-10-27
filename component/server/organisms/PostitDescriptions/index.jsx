import Postit from "component/server/molecules/Postit/index";
import styled from "./index.module.css";

// eslint-disable-next-line react/prop-types
const PostitDescriptions = () => {
  return (
    <ul className={styled.postitDescriptions}>
      {/* <ul className="flex justify-around items-center max-w-4xl my-10 mx-auto lg:flex-col lg:my-0 lg:h-[650px]"> */}
      <Postit
        title={
          <>
            디지털쏙 페이지의 <br /> 핵심 포인트 1️⃣
          </>
        }
        content={"스마트 기기로 할 수 있는 기능들을 정리했습니다."}
      />
      <Postit
        title={
          <>
            디지털쏙 페이지의 <br /> 핵심 포인트 2️⃣
          </>
        }
        content={"화면을 직접 눌러보며 기능을 미리 경험할 수 있습니다."}
      />
    </ul>
  );
};

export default PostitDescriptions;
