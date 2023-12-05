/* eslint-disable react/prop-types */

import H2 from "component/server/atoms/H2/index";

// import FunctionIntroBoxList from "stories/page/organisms/FunctionIntroBoxList/index";

// eslint-disable-next-line react/prop-types
const FunctionIntro = ({ functionName }) => {
  return (
    <section className="w-4/5 mx-auto mt-16 mb-56 text-center md:mt-16 md:mb-24 sm:py-12">
      <H2>
        <b>{functionName}</b> 기능 소개
        {/* <b>{detailFunctionObject.name}</b> 기능 소개 */}
      </H2>
      {/* <FunctionIntroBoxList
        char={detailFunctionObject.characteristic}
        app={detailFunctionObject.app}
        setMyAppName={setMyAppName}
        setMyMethodId={setMyMethodId}
        setMyDescriptionId={setMyDescriptionId}
      /> */}
    </section>
  );
};

export default FunctionIntro;
