import Categorires from "./_components/categories";
import Functions from "./_components/functions";

const BlogPage = ({ params, searchParams }: any) => {
  return (
    <div>
      <Categorires searchParams={searchParams} />
      <Functions searchParams={searchParams} />
    </div>
  );
};

export default BlogPage;
