import Categorires from "./_components/categories";
import Functions from "./_components/functions";

const BlogPage = ({ searchParams }: { searchParams: { tab: string } }) => {
  return (
    <div>
      <Categorires />
      <Functions searchParams={searchParams} />
    </div>
  );
};

export default BlogPage;
