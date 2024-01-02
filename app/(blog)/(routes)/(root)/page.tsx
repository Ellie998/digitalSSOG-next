import PostitMedium from "@/components/my-ui/postit-medium";
import Categorires from "./_components/categories";
import Functions from "./_components/functions";
import Note from "@/components/my-ui/note";

const BlogPage = ({ searchParams }: { searchParams: { tab: string } }) => {
  return (
    <Note
      className="w-4/5 mx-auto mt-8 "
      holeNum={17}
      title={"스마트 기기로 사용 가능한 기능들"}
      subTitle={"카테고리를 누르면 카테고리에 속하는 기능들을 볼 수 있습니다."}>
      <PostitMedium
        className="w-4/5 col-start-2 col-end-3 mx-auto"
        title={<Categorires />}
        content={<Functions searchParams={searchParams} />}
      />
    </Note>
  );
};

export default BlogPage;
