import CategoryContentList from "stories/page/organisms/CategoryContentList";
import CategoryList from "stories/page/organisms/CategoryList";
import PostitMedium from "stories/page/molecules/PostitMedium";

// eslint-disable-next-line react/prop-types
const IndexFunctionsPostit = ({ setTabName, tabName }) => {
  return (
    <PostitMedium
      title={<CategoryList setTabName={setTabName} tabName={tabName} />}
      content={<CategoryContentList tabName={tabName} />}
    />
  );
};

export default IndexFunctionsPostit;
