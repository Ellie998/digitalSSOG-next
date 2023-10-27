import H2 from "component/server/atoms/H2/index";
import SubTitle from "component/server/atoms/SubTitle/index";

// eslint-disable-next-line react/prop-types
const NoteContent = ({ height, children, title, subTitle }) => {
  return (
    <div
      className={`pt-14 text-center break-keep min-h-[${
        height ? height : "800px"
      }]`}
      height={height}>
      <div className="mx-0 my-auto ">
        <H2>{title ? title : null}</H2>
        <SubTitle>{subTitle ? subTitle : null}</SubTitle>
      </div>
      {/* mt-[30px] */}
      <div className="mt-8 ">{children}</div>
    </div>
  );
};

export default NoteContent;
