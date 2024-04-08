export type Review = {
  _id: string;
  image: string;
  review: string;
  user: {
    name: string;
    photo: string;
  };
};
