import H1 from "component/server/atoms/H1/index";
import SubTitle from "component/server/atoms/SubTitle/index";
import PostitDescriptions from "component/server/organisms/PostitDescriptions/index";

const IndexIntro = () => {
  return (
    <section className=" mx-auto my-40 text-center py-32 px-12 sm:px-0 sm:min-w-[300px] ">
      <H1>
        안녕하세요 💁🏻‍♀️ <br />
        디지털쏙 페이지 입니다.
      </H1>
      <SubTitle>
        사용중인 스마트 기기로 무엇을 할 수 있는지 알고 계시나요?
      </SubTitle>
      <PostitDescriptions />
    </section>
  );
};

export default IndexIntro;
