var frequencySort = function (s: string) {
  let dataObject = {};
  for (let data of s) {
    dataObject[data] = dataObject[data] + 1 || 1;
  }
  let dataArr:any = Object.entries(dataObject).sort((a:any, b:any) => b[1] - a[1]);
  let dataString = "";
  for (let i = 0; i < dataArr.length; i++) {
    dataString += dataArr[i][0].repeat(dataArr[i][1]);
  }
  return dataString;
};

console.log(frequencySort("tree"));
