/* eslint-disable react/prop-types */
import IndexIntro from "stories/page/templates/IndexIntro/index";
import IndexFunctionCategory from "stories/page/templates/IndexFunctionCategory/index";

function Index({ tabName, setTabName }) {
  return (
    <main>
      <IndexIntro />
      <IndexFunctionCategory tabName={tabName} setTabName={setTabName} />
    </main>
  );
}

export default Index;
