const groenten = [
  {
    id: 1,
    naam: "prei",
    prijs: 2.1,
  },
  {
    id: 1,
    naam: "brocoli",
    prijs: 1.5,
  },
  {
    id: 1,
    naam: "tomaat",
    prijs: 3.4,
  },
  {
    id: 1,
    naam: "erwten",
    prijs: 0.7,
  },
];

// div lijst selecteren
const lijstDiv = document.querySelector("#lijst")

// alle groenten plaatsen in een div
groenten.forEach((groente) => {
  const newP = document.createElement("p") 
  newP.innerHTML = groente.naam
  lijstDiv.appendChild(newP) 
})