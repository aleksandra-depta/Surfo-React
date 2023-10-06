export const optionsType = [
  { value: "Water Sports", label: "sailing" },
  { value: "Water Sports", label: "surfing" },
  { value: "Water Sports", label: "diving" },
  { value: "Water Sports", label: "windsurfing" },
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
