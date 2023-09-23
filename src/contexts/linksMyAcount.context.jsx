import { createContext, useState } from "react";

export const linksMyAccount = [
  {
    _id: "54kb65kb3o4j23",
    linkTo: "/myAccount",
    title: "Account"
  },
  {
    _id: "65v75h435hb434j",
    linkTo: "/myAccount/booking",
    title: "Booking"
  },
  {
    _id: "6bg5jkb34j3ol4",
    linkTo: "/myAccount/favorites",
    title: "Favorites"
  }
];

export const LinksNavMyAccountContext = createContext({
  linksMyAccount: linksMyAccount,
  link: '54kb65kb3o4j23'
});

export const LinksNavMyAccountProvider = ({ children }) => {
  const [link, setLink] = useState("");

  const activeLink = (link) => {
    setLink('');
    setLink(link)
  };

  const value = { 
    activeLink, link
  };

  return <LinksNavMyAccountContext.Provider value={value}>{children}</LinksNavMyAccountContext.Provider>;
};