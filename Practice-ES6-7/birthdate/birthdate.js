/**
 * Nhập vào ngày sinh(22/12/2012) cho biết đó sinh nhật lần thứ mấy.
 */
const readlineSync = require("readline-sync");

function numbersBirthday() {
  //user enter dd/mm/yyyy
  let birthday = readlineSync.question("> Enter birthday (dd/mm/yyyy): ");
  //split string user enter to array
  let birthdayArr = birthday.split("/").map(x => x.replace(/\s/g, "")); //[ '22', '12', '2020' ]

  //create date() to correct format mm/dd/yyy
  birthday = new Date(`${birthdayArr[1]}/${birthdayArr[0]}/${birthdayArr[2]}`);
  if (birthday == "Invalid Date") {
    console.log("Please enter correct format dd/mm/yyyy!!!");
    numbersBirthday();
  } else {
    birthdayArr = birthday
      .toLocaleDateString()
      .split("/")
      .map(x => parseInt(x));
    nowDateArr = new Date()
      .toLocaleDateString()
      .split("/")
      .map(x => parseInt(x));
    let numbersOfBirthday = nowDateArr[2] - birthdayArr[2];
    if (
      nowDateArr[0] < birthdayArr[0] ||
      (nowDateArr[0] == birthdayArr[0] && nowDateArr[1] < birthdayArr[1])
    ) {
      numbersOfBirthday -= 1;
    }
    if (numbersOfBirthday < 0) {
      console.log(
        `Please enter date less than ${nowDateArr[1]}/${nowDateArr[0]}/${nowDateArr[2]}`
      );
    } else {
      console.log("Numbers of birth:", numbersOfBirthday);
    }
  }
}

function showMenu() {
  console.log("============================================================");
  console.log("Enter 1. Check the birthday of what time?");
  console.log("Enter 0. Exit");
  let option = readlineSync.question(">");
  // console.log(option);
  switch (option) {
    case "1":
      numbersBirthday();
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
