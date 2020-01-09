/**
 * Cho Countries: https://github.com/samayo/country-json/blob/master/src/country-by-avg-male-height.json 
  a. Sort: Theo tên (tăng dần)
  b. Sort: Theo height (giảm dần)
  c. Tìm các quốc gia có height [160;170] và tên quốc gia bắt đầu bằng ký tự B hoặc C
  d. Tính tổng height của câu c
 */
const readlineSync = require("readline-sync");
const fs = require("fs");

let dataCountry = [];
function loadData() {
  const fileContent = fs.readFileSync("./country-by-avg-male-height.json", {
    encoding: "utf8"
  });
  dataCountry = JSON.parse(fileContent);
}

function sortName() {
  function compare(a, b) {
    const countryA = a.country.toUpperCase();
    const countryB = b.country.toUpperCase();
    let comparison = 0;
    if (countryA > countryB) comparison = 1;
    else if (countryA < countryB) comparison = -1;
    return comparison * -1;
  }
  dataCountry.sort(compare);
  console.log(dataCountry);
}
function sortHeight() {
  function compare(a, b) {
    const heightA = a.height;
    const heightB = b.height;
    let comparison = 0;
    if (heightA > heightB) comparison = 1;
    else if (heightA < heightB) comparison = -1;
    return comparison;
  }
  dataCountry.sort(compare);
  console.log(dataCountry);
}
function filterCountry() {
  return dataCountry.filter(x => {
    return (
      x.height >= 160 &&
      x.height <= 170 &&
      (x.country[0].toUpperCase() === "B" || x.country[0].toUpperCase() === "C")
    );
  });
}

function sumHeightOfCase3() {
  const result = filterCountry();
  const sum = result.reduce((a, b) => ({
    country: a.country,
    height: Number(a.height) + Number(b.height)
  })).height;
  console.log("Sum Height Of Case 3: ", sum);
}

function showMenu() {
  console.log("================================");
  console.log("1. Sort Name (ascending)");
  console.log("2. Sort Height (descending)");
  console.log("3. Filter country");
  console.log("4. Sum height of case 3");
  console.log("0. Exit");
  const option = readlineSync.question(">");
  switch (option) {
    case "1":
      sortName();
      showMenu();
      break;
    case "2":
      sortHeight();
      showMenu();
      break;
    case "3":
      const result = filterCountry();
      console.log(result);
      showMenu();
      break;
    case "4":
      sumHeightOfCase3();
      showMenu();
      break;
    case "0":
      break;
    default:
      console.log("Wrong option");
      showMenu();
      break;
  }
}
function main() {
  loadData();
  showMenu();
}
main();
