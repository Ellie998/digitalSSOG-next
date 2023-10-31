import fs from "fs";
import path from "path";

const dataDirectory = path.join(
  // eslint-disable-next-line no-undef
  process.cwd(),
  "data",
  "call",
  "전화걸기(발신)",
  "카카오톡"
);
const directory = path.join(
  // eslint-disable-next-line no-undef
  // process.cwd(),
  // "data"
  "public",
  "testData"
);

export function getDirectoryData() {
  console.log(directory);
}

export function simpleFunction() {
  console.log(directory);
  return directory;
}

export function getSortedFunctionData() {
  // Get file names under /data
  const fileNames = fs.readdirSync(dataDirectory);
  const allFunctionDescriptionData = fileNames.map((fileName) => {
    // Remove ".json" from file name to get id
    const id = fileName.replace(/\.json$/, "");

    // Read markdown file as string
    const fullPath = path.join(dataDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section

    // Combine the data with the id
    return {
      id,
      fileContents,
      functionName: "전화걸기(발신)",
      appName: "카카오톡",
      methodId: "1",
      descriptionId: "1",
    };
  });
  // Sort posts by date
  return allFunctionDescriptionData;
}

export function testFunction() {
  const fileNames = fs.readdirSync(directory);
  // const allFunctionDescriptionData = fileNames.map((fileName) => {
  //   // Remove ".json" from file name to get id
  //   const id = fileName.replace(/\.json$/, "");

  //   // Read markdown file as string
  //   const fullPath = path.join(dataDirectory, fileName);
  //   const fileContents = fs.readFileSync(fullPath, "utf8");

  //   // Use gray-matter to parse the post metadata section

  //   // Combine the data with the id
  //   return {
  //     id,
  //     ...fileContents,
  //   };
  // });

  // return allFunctionDescriptionData;
  return fileNames;
}
