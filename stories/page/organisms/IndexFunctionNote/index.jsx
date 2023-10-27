import IndexFunctionsPostit from "stories/page/organisms/IndexFunctionsPostit/index";
import Note from "stories/page/molecules/Note/index";

// eslint-disable-next-line react/prop-types, no-unused-vars
const IndexFunntionNote = () => {
  return (
    <section className="max-w-3xl mx-auto my-0">
      <Note
        title={"스마트 기기로 사용 가능한 기능들"}
        subTitle={
          "카테고리를 누르면 카테고리에 속하는 기능들을 볼 수 있습니다."
        }
        holeNum={17}>
        <IndexFunctionsPostit />
      </Note>
    </section>
  );
};

export default IndexFunntionNote;
