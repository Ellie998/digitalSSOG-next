/* eslint-disable react/prop-types */
import IntroBoxContentLine from "stories/page/atoms/IntroBoxContentLine/index";
import IntroBox from "stories/page/molecules/IntroBox/index";

// eslint-disable-next-line react/prop-types, no-unused-vars
const FunctionIntroCharBox = ({ char }) => {
  return (
    <IntroBox title={"특징"}>
      {typeof char === "object" ? (
        char.map((charDescription, i) => (
          <IntroBoxContentLine key={i}>
            {`${i + 1}. ${charDescription}`}
          </IntroBoxContentLine>
        ))
      ) : (
        <IntroBoxContentLine>{char}</IntroBoxContentLine>
      )}
    </IntroBox>
  );
};

export default FunctionIntroCharBox;
