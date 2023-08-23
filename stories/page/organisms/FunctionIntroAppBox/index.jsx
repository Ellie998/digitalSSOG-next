/* eslint-disable react/prop-types */
import IntroBoxContentLine from "stories/page/atoms/IntroBoxContentLine";
import IntroBox from "stories/page/molecules/IntroBox";

// eslint-disable-next-line react/prop-types, no-unused-vars
const FunctionIntroAppBox = ({
  app,
  setMyAppName,
  setMyMethodId,
  setMyDescriptionId,
}) => {
  return (
    <IntroBox title={"관련 어플"}>
      <ul>
        {app?.map((dataAppName) => (
          <li
            key={Math.random()}
            className="leading-7 hover:underline-offset-auto"
            onClick={() => {
              innerWidth > 850 && scrollTo({ top: 720, behavior: "smooth" });
              innerWidth < 851 &&
                innerWidth > 800 &&
                scrollTo({ top: 600, behavior: "smooth" });
              innerWidth < 801 && scrollTo({ top: 900, behavior: "smooth" });
              innerWidth < 501 && scrollTo({ top: 1050, behavior: "smooth" });
              setMyAppName(dataAppName);
              setMyMethodId("1");
              setMyDescriptionId("0");
            }}>
            <IntroBoxContentLine isCenter>{dataAppName}</IntroBoxContentLine>
          </li>
        ))}
      </ul>
    </IntroBox>
  );
};

export default FunctionIntroAppBox;
