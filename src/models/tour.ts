export type Tour = {
  _id: string;
  nr: number | string;
  amount: number;
  cardLargeDescription: string;
  cardLargeImgSlider: string[];
  cardLarge: string;
  cardMedium: string;
  cardSmall: string;
  days: number;
  description: string;
  descriptionCheckPoints: [];
  food: string;
  imageCover: string;
  imageMain: string;
  island: string;
  keywords: string[];
  languages: string[];
  mapZoom: number;
  mapCenterCoordinates: number[];
  mapLocations: {
    coordinates: number[];
    description: string;
  }[];
  maxGroupSize: number;
  minGroupSize: number;
  name: string;
  price: number;
  priceTotal: number;
  ratingAverage: number;
  ratingQuantity: number;
  startAndEndPoint: string;
  sleeping: string;
  stopPoints: string[];
  stops: string[];
  totalPrice: number;
  type: string;
};
