import { Tour } from "./tour";
import { CurrentUser } from "./user";

export type Bookings = {
  data: Booking[];
};

export type Booking = {
  _id: string;
  tour: Tour;
  user: CurrentUser;
  travelers: number;
};
