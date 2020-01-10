function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "./country-by-avg-male-height.json", true); // Replace './.......json' with the path to your file
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

let dataCountry = [];

function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    dataCountry = JSON.parse(response);
  });
}

init();

function removeChildMyListCountry() {
  const myNode = document.getElementById("myListCountry");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}
function renderLi(data, pos1, pos2) {
  data.forEach(x => {
    let li = document.createElement("LI");
    let textLi = document.createTextNode(`${x[pos1]}, ${x[pos2]}`);
    li.appendChild(textLi);
    document.getElementById("myListCountry").appendChild(li);
  });
}

function sortName() {
  removeChildMyListCountry();
  function compare(a, b) {
    const countryA = a.country.toUpperCase();
    const countryB = b.country.toUpperCase();
    let comparison = 0;
    if (countryA > countryB) comparison = -1;
    else if (countryA < countryB) comparison = 1;
    return comparison;
  }
  dataCountry.sort(compare);
  renderLi(dataCountry, "country", "height");
}

function sortHeight() {
  removeChildMyListCountry();
  function compare(a, b) {
    const heightA = a.height;
    const heightB = b.height;
    let comparison = 0;
    if (heightA > heightB) comparison = 1;
    else if (heightA < heightB) comparison = -1;
    return comparison;
  }
  dataCountry.sort(compare);
  renderLi(dataCountry, "height", "country");
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

function filterCountryDisplay() {
  removeChildMyListCountry();
  const result = filterCountry();
  renderLi(result, "country", "height");
}

function sumHeightOfFilter() {
  removeChildMyListCountry();
  const result = filterCountry();
  const sum = result.reduce((a, b) => {
    return a + Number(b.height);
  }, 0);
  let li = document.createElement("LI");
  let textLi = document.createTextNode(`Sum: ${sum}`);
  li.appendChild(textLi);
  document.getElementById("myListCountry").appendChild(li);
}
