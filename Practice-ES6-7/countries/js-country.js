function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './country-by-avg-male-height.json', true); // Replace './.......json' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

let dataCountry = []
function init() {
  loadJSON(function (response) {
    // Parse JSON string into object
    dataCountry = JSON.parse(response);
  });
}
init();

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
  // if (document.getElementById("myListCountry")){
  dataCountry.forEach(x => {
    let li = document.createElement("LI");
    let textLi = document.createTextNode(`${x.country}, ${x.height}`);
    li.appendChild(textLi);
    document.getElementById("myListCountry").appendChild(li);
  })
  // }
}