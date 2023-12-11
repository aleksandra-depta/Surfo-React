export type CurrentUsers = {
  id: number | string;
  data: CurrentUser;
};

export type CurrentUser = {
  _id: string;
  name: string;
  email: string;
  photo: string;
};
