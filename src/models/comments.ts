import { Tour } from "./tour";
import { CurrentUser } from "./user";

export type Comments = {
  comments: {
    id: string;
    _id: string;
    comment: string;
    tour: Tour;
    user: CurrentUser;
  }[];
};
