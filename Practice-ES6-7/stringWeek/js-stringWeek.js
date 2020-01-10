const originalString = "thu 2, thu 5, thu 4, thu 3, thu 6, thu 7";

function removeChild() {
  const myNode = document.getElementById("myList");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}
function renderLi(data) {
  data.forEach(x => {
    let li = document.createElement("LI");
    let textLi = document.createTextNode(`${x}`);
    li.appendChild(textLi);
    document.getElementById("myList").appendChild(li);
  });
}

function separateNumbers() {
  let arr = originalString.split(",").map(x => x.replace(/\s/g, ""));
  let numbersInStr = arr.map(x => x.substr(3, 1));
  return numbersInStr;
}

function separateNumbersDisplay() {
  removeChild();
  const numbersInStr = separateNumbers();
  renderLi(numbersInStr);
}

function translateToEng() {
  removeChild();
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let str = originalString;
  str = str.replace(/thu/g, "on");
  const numbersInStr = separateNumbers();
  numbersInStr.forEach(x => {
    str = str.replace(`${x}`, `${dayNames[x - 2]}`);
  });
  let li = document
    .createElement("LI")
    .appendChild(document.createTextNode(`${str}`));
  document.getElementById("myList").appendChild(li);
}
