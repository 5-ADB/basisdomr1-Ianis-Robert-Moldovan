const groenten = [
  { id: 1, naam: "prei", prijs: 2.1 },
  { id: 2, naam: "brocoli", prijs: 1.5 },
  { id: 3, naam: "tomaat", prijs: 3.4 },
  { id: 4, naam: "erwten", prijs: 0.7 },
];

const divLijstGroente = document.querySelector("#lijst");

const newSelectbox = document.createElement("select");
newSelectbox.id = "groentenlijst";

groenten.forEach((groente) => {
  const newOption = document.createElement("option");
  newOption.innerHTML = groente.naam;
  newOption.value = groente.id;
  newSelectbox.appendChild(newOption);
});
divLijstGroente.appendChild(newSelectbox);

const divKostprijs = document.createElement("div");
divKostprijs.id = "kostprijs";
divLijstGroente.appendChild(divKostprijs);

newSelectbox.addEventListener("change", (event) => {
  const geselecteerdeId = event.target.value;
 const geselecteerdeGroente = groenten.find(
    (groente) => groente.id == geselecteerdeId
  );
  divKostprijs.textContent = `Kostprijs: €${geselecteerdeGroente.prijs}`;
});