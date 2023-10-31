import MyLink from "component/client/MyLink/index";

import { getSortedFunctionData, testFunction } from "lib/functionDatas";

export async function generateStaticParams() {
  // const data = await getSortedFunctionData()[0];
  return [
    {
      functionName: "전화걸기(발신)",
      appName: "kakaotalk",
      methodId: "1",
      descriptionId: "1",
    },
  ];
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          functionName: "전화걸기(발신)",
          appName: "카카오톡",
          methodId: "1",
          descriptionId: "1",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
}

export function getData() {
  const { id, fileContents } = getSortedFunctionData()[0];

  const contents = JSON.parse(fileContents);
  return {
    id,
    contents,
  };
}

export default function Page() {
  const { contents } = getData();
  const result = testFunction();
  console.log(result);
  // return <div>{id}</div>;

  return (
    <>
      <MyLink href={"/"}>test link</MyLink>
      <MyLink href={"/description/전화받기(수신)"}>test link2</MyLink>
      {contents.methodContent?.map((content, i) => (
        <div key={i}>{content}</div>
      ))}
      {result.map((category, i) => (
        <div key={i}>{category}</div>
      ))}
    </>
  );
}
