import Note from "component/server/molecules/Note/index";
import { testFunction } from "lib/functionDatas";
// import IndexFunctionsPostit from "../IndexFunctionsPostit/index";

/* max-width: 800px; */

// eslint-disable-next-line react/prop-types, no-unused-vars
const IndexFunntionNote = () => {
  const result = testFunction();

  return (
    <section className="max-w-3xl mx-auto my-0">
      <Note
        title={"스마트 기기로 사용 가능한 기능들"}
        subTitle={
          "카테고리를 누르면 카테고리에 속하는 기능들을 볼 수 있습니다."
        }
        holeNum={17}>
        {/* <IndexFunctionsPostit /> */}
        {result?.map((category, i) => (
          <div key={i}>{category}</div>
        ))}
      </Note>
    </section>
  );
};

export default IndexFunntionNote;
