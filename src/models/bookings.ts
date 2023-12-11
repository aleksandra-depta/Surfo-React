import { Tour } from "./tour";
import { CurrentUser } from "./user";

export type Bookings = {
  bookings: Booking[];
};

export type Booking = {
  _id: string;
  tour: Tour;
  user: CurrentUser;
  travelers: number;
};
