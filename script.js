// Exercice 1

// 1.1
// array tha contains the fish informations
let fishList = [
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Conggridae", "Congre", "Congre congre"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
];

// 1.2
// function that create the HTML table from an array
function createHTMLTable(array) {
  // Table
  let table = document.createElement("table");

  let i = 0,
    j; // intermediates variables for the enumeration
  let currentElementI, currentElementJ; // intermediates variables for the sequentials treatments
  let arrayHeader = ["Ordre", "Famille", "Nom vernaculaire", "Nom binominal"];
  // table's header
  let thead = document.createElement("thead");
  // table's first row
  let tr = document.createElement("tr");

  // fill the table's header
  while (i < arrayHeader[0].length) {
    currentElementI = arrayHeader[0][i];
    i++;

    // elements of the table's header
    let th = document.createElement("th");
    th.innerHTML = currentElementI;
    th.style.padding = "10px";
    th.style.border = "1px solid black";
    th.style.color = "red";
    tr.appendChild(th);
    // }
    thead.appendChild(tr); // add the row into the header
    table.appendChild(thead); // add the header into the table


    // table's body
    let tbody = document.createElement("tbody");
    i = 0;

    // fill the table's body
    while (i < array.length) {
      currentElementI = array[i];
      i++;

      // rows of the table's body
      let tr = document.createElement("tr");
      j = 0;

      // fill every row of the table body
      while (j < currentElementI.length) {
        currentElementJ = currentElementI[j];
        j++;

        // elements of the table body
        let td = document.createElement("td");
        td.innerHTML = currentElementJ;
        td.style.padding = "10px";
        td.style.border = "1px solid black";
        td.style.fontStyle = "italic";
        tr.appendChild(td);
      }
      tbody.appendChild(tr); // add the row into the the table's body
    }
    table.appendChild(tbody); // add the body into the table
    return table; // return the table
  }
}

  document.body.appendChild(createHTMLTable(fishList));



  // Exercice 2

  let a = [1, 2, 3, 4, 1, 2, 3, 4];
  let b = 2;

  function count(arrayNum, selectNum) {
    let currentElement;
    let selectNumRepeat = 0;
    for (var i = 0; i < arrayNum.length; i++) {
      currentElement = arrayNum[i]
      if (currentElement === selectNum) {
        selectNumRepeat++;
      }
    }
    return selectNumRepeat;
  }
  count(a, b);



  // Exercice 3

  function textTransform() {
    let container = document.createElement("form");

    let textLabel = document.createElement("label");
    container.appendChild(textLabel);
    textLabel.textContent = "Saisisez une phrase : ";
    textLabel.setAttribute("for", "text");

    let text = document.createElement("input");
    container.appendChild(text);
    text.setAttribute("type", "text");
    text.setAttribute("name", "text");
    text.setAttribute("id", "text");
    container.appendChild(document.createElement("br"));

    let majLabel = document.createElement("label");
    container.appendChild(majLabel);
    majLabel.textContent = "Mettre cette phrase en majuscules ";
    majLabel.setAttribute("for", "majButton");

    let majButton = document.createElement("button");
    container.appendChild(majButton);
    majButton.setAttribute("type", "button");
    majButton.setAttribute("name", "OK");
    majButton.setAttribute("id", "majButton");
    majButton.addEventListener("click", function() {
      result.textContent = text.value;
      result.style.textTransform = "uppercase";
    }, false);
    container.appendChild(document.createElement("br"));

    let minLabel = document.createElement("label");
    container.appendChild(minLabel);
    minLabel.textContent = "Mettre cette phrase en minuscules ";
    minLabel.setAttribute("for", "minButton");

    let minButton = document.createElement("button");
    container.appendChild(minButton);
    minButton.setAttribute("type", "button");
    minButton.setAttribute("name", "OK");
    minButton.setAttribute("id", "minButton");
    minButton.addEventListener("click", function() {
      result.textContent = text.value;
      result.style.textTransform = "lowercase";
    }, false);
    container.appendChild(document.createElement("br"));

    let resultLabel = document.createElement("label");
    container.appendChild(resultLabel);
    resultLabel.textContent = "Résultat ";
    resultLabel.setAttribute("for", "result");

    let result = document.createElement("label");
    container.appendChild(result);
    result.setAttribute("id", "result");

    return container;
  }


  document.body.appendChild(textTransform());
