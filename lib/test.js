import { getSortedFunctionData } from "./functionDatas.js";

// export default function test() {
const result = getSortedFunctionData()[0];

console.log("hello");
console.log(result.fileContents);
console.log(typeof result);
