// export function formartNames(text) {
//   // 提取数组部分
//   const arrayText = text.match(/\[.*\]/s)[0];
//   // 使用正则表达式处理键和值，将它们都放入双引号中
//   const jsonText = arrayText
//     .replace(/(\w+):/g, '"$1":') // 将键放入双引号中
//     .replace(/: '([^']*)'/g, ': "$1"'); // 将值放入双引号中

//   // 尝试解析JSON
//   let resultArray;
//   try {
//     resultArray = JSON.parse(jsonText);
//     console.log(resultArray);
//   } catch (e) {
//     console.error("Error parsing the JSON:", e);
//   }
//   return resultArray;
// }

// export function formartNames(str){
//     // 去除字符串前的 "答案：" 字样
//     str = str.replace("\n答案：", "");
//     // 使用正则表达式替换属性名称和值的单引号为双引号
//     str = str.replace(/'([^']+)':\s*'([^']+)'/g, '"$1": "$2"');

//     // 解析 JSON
//     let parsedArray;
//     try {
//         parsedArray = JSON.parse(str);
//         console.log(parsedArray);
//     } catch (e) {
//         console.error("解析错误:", e);
//     }
//     return parsedArray || []
// }

export function formartNames(text) {
  let jsonStr = text.replace(/(\w+): '([^']+)'/g, (match, p1, p2) => {
    return `"${p1}": "${p2}"`;
  });
  let arr = [];
  try {
    arr = JSON.parse(jsonStr);
  } catch (error) {
    console.log(error);
  }

  return arr || [];
}
