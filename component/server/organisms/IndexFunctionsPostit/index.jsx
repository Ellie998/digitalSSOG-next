import PostitMedium from "../PostitMedium/index";
import CategoryList from "../CategoryList/index";
import CategoryContentList from "../CategoryContentList/index";

// eslint-disable-next-line react/prop-types
const IndexFunctionsPostit = ({ setTabName, tabName }) => {
  return (
    <div className="mx-auto my-0 max-w-90p">
      <PostitMedium
        title={<CategoryList setTabName={setTabName} tabName={tabName} />}
        content={<CategoryContentList tabName={tabName} />}
      />
    </div>
  );
};

export default IndexFunctionsPostit;
