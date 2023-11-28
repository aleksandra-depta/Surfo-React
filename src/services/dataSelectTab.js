export const optionsType = [
  { value: "Water Sport", label: "sailing" },
  { value: "Water Sport", label: "surfing" },
  { value: "Water Sport", label: "diving" },
  { value: "Water Sport", label: "windsurfing" },
  { value: "Hiking Time", label: "hiking" },
  { value: "Day Trip", label: "day trip" },
];

export const optionsLocation = [
  { value: "Tenerife", label: "Tenerife" },
  { value: "Lanzarote", label: "Lanzarote" },
  { value: "Fuerteventura", label: "Fuerteventura" },
  { value: "Gran Canaria", label: "Gran Canaria" },
  { value: "La Palma", label: "La Palma" },
  { value: "La Gomera", label: "La Gomera" },
  { value: "El Hierro", label: "El Hierro" },
];

export const optionsTravelers = [];
(function () {
  let i = 1;
  while (i <= 8) {
    optionsTravelers.push({ value: `${i}`, label: `${i}` });
    i++;
  }
})();
