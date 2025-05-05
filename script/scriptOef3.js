const groenten = [
  {
    id: 1,
    naam: "prei",
    prijs: 2.1,
  },
  {
    id: 2,
    naam: "brocoli",
    prijs: 1.5,
  },
  {
    id: 3,
    naam: "tomaat",
    prijs: 3.4,
  },
  {
    id: 4,
    naam: "erwten",
    prijs: 0.7,
  },
];

const lijstDiv = document.querySelector("#lijst")
const kostprijsDiv = document.querySelector("#kostprijs")

let totaalPrijs = 0

function updateTotaalPrijs() {
    kostprijsDiv.textContent = `Totaal prijs: €${totaalPrijs}`
}