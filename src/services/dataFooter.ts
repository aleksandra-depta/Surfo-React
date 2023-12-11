export type TypeLinks = {
  link: string;
  name: any;
}[];

export const socialMediaIcons: TypeLinks = [
  {
    link: "https://www.instagram.com/",
    name: "logo-instagram",
  },
  {
    link: "https://www.facebook.com/",
    name: "logo-facebook",
  },
  {
    link: "https://www.twitter.com/",
    name: "logo-twitter",
  },
];

export const linksAccount: TypeLinks = [
  {
    link: "",
    name: "Log in",
  },
  {
    link: "",
    name: " Sign up",
  },
  {
    link: "",
    name: "iOS app",
  },
  {
    link: "",
    name: "Android app",
  },
];

export const linksCompany: TypeLinks = [
  {
    link: "",
    name: "About Surfo",
  },
  {
    link: "",
    name: "How we work",
  },
  {
    link: "",
    name: "Our team",
  },
  {
    link: "",
    name: "Careers",
  },
];

export const linksMore: TypeLinks = [
  {
    link: "",
    name: "For Business",
  },
  {
    link: "",
    name: "Partners",
  },
  {
    link: "",
    name: "Press",
  },
  {
    link: "",
    name: "Certificates",
  },
];

type TypeLinksGroup = {
  name: string;
  array: TypeLinks;
}[];

export const linksGroup: TypeLinksGroup = [
  {
    name: "Account",
    array: [...linksAccount],
  },
  {
    name: "Company",
    array: [...linksCompany],
  },
  {
    name: "More",
    array: [...linksMore],
  },
];
