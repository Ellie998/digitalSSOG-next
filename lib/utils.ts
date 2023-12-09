export function decodeUrl(url: string): string {
  let result = decodeURI(url).replaceAll(" ", "-").replaceAll("%2C", ",");

  return result;
}

// export function functionKeysArrayToObject(functionKeys: string[]): object {
//   if(functionKeys)
//   return {};
// }
