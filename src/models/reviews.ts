export type Reviews = {
  reviews: {
    _id: string;
    image: string;
    review: string;
    user: {
      name: string;
    };
  }[];
};
