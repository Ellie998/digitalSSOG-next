/* eslint-disable react/prop-types */
import IndexIntro from "stories/page/templates/IndexIntro";
import IndexFunctionCategory from "stories/page/templates/IndexFunctionCategory";

function Index({ tabName, setTabName }) {
  return (
    <main>
      <IndexIntro />
      <IndexFunctionCategory tabName={tabName} setTabName={setTabName} />
    </main>
  );
}

export default Index;
