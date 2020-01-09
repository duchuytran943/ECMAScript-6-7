/**
 * Cho chuỗi: "thu 2, thu 5, thu 4, thu 3, thu 6, thu 7";

a. Tách lấy tất cả các số có trong chuỗi.

b. Chuyển chuỗi ở trên thành ngày tiếng anh dạng "on Monday, ...., on Saturday".

Note: Giả thiết một tuần có 6 ngày. Không có ngày chủ nhật.
 */

const readlineSync = require("readline-sync");
const originalString = "thu 2, thu 5, thu 4, thu 3, thu 6, thu 7";

function separateNumbers() {
  let arr = originalString.split(",").map(x => x.replace(/\s/g, ""));
  let numbersInStr = arr.map(x => x.substr(3, 1));
  return numbersInStr;
}

function translateToEng() {
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let str = originalString;
  str = str.replace(/thu/g, "on");
  const numbersInStr = separateNumbers();
  numbersInStr.forEach(x => {
    console.log(x)
    str = str.replace(`${x}`, `${dayNames[x-2]}`);
    // switch (x) {
    //   case "2":
    //     str = str.replace(`${x}`, "Monday");
    //     break;
    //   case "3":
    //     str = str.replace(`${x}`, "Tuesday");
    //     break;
    //   case "4":
    //     str = str.replace(`${x}`, "Wednesday");
    //     break;
    //   case "5":
    //     str = str.replace(`${x}`, "Thursday");
    //     break;
    //   case "6":
    //     str = str.replace(`${x}`, "Friday");
    //     break;
    //   case "7":
    //     str = str.replace(`${x}`, "Saturday");
    //     break;
    //   default:
    //     break;
    // }
  });
  console.log(str);
}

function showMenu() {
  console.log("==========================================");
  // console.log("thu 2, thu 5, thu 4, thu 3, thu 6, thu 7");
  console.log("1. Separate all numbers in the string");
  console.log("2. Translate string to English");
  console.log("0. Exit");
  let option = readlineSync.question(">");
  switch (option) {
    case "1":
      const numbersInStr = separateNumbers();
      console.log("Numbers has in string: ", numbersInStr);
      showMenu();
      break;
    case "2":
      translateToEng();
      showMenu();
      break;
    case "0":
      break;
    default:
      console.log("Wrong option!!!");
      showMenu();
      break;
  }
}

function main() {
  showMenu();
}
main();
