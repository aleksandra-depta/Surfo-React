import { Link } from "react-router-dom";

import { HeadingH3, LinkGrey, TextSmall } from "../../styled/typography";
import { IconSocialMedia } from "../../styled/icons";
import { Column, Icons, ImageLogo, Row } from "./footer.styles";

import Logo from "../../img/logo.png";

const Footer = () => {
  const socialMediaIcons = [
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

  const linksAccount = [
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

  const linksCompany = [
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

  const linksMore = [
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

  const linksGroup = [
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

  return (
    <Row>
      <Column>
        <Link to="/" className="footer__logo">
          <ImageLogo alt="Surfo" src={`${Logo}`} />
        </Link>
        <Icons>
          {socialMediaIcons.map((el) => (
            <Link to={el.link} target="_blank">
              <IconSocialMedia>
                <ion-icon size="large" name={el.name}></ion-icon>
              </IconSocialMedia>
            </Link>
          ))}
        </Icons>
        <TextSmall>
          Copyright &copy; 2023 by Surfo,
          <br /> Aleksandra Depta <br /> Inc. All rights reserved.
        </TextSmall>
      </Column>

      <Column>
        <HeadingH3>Contact us</HeadingH3>
        <TextSmall>
          623 Amaizing St., 2nd Floor,
          <br /> San Francisco, CA 94105
        </TextSmall>
        <LinkGrey to="tel:215-23331-6120">215-23331-6120</LinkGrey>
        <LinkGrey to="mailto:arch.depta@gmail.com">hello@surfo.com</LinkGrey>
      </Column>

      {linksGroup.map((group) => (
        <Column>
          <HeadingH3>{group.name}</HeadingH3>
          <ul className="footer__nav">
            {group.array.map((el) => (
              <li>
                <LinkGrey to="/login">{el.name}</LinkGrey>
              </li>
            ))}
          </ul>
        </Column>
      ))}
    </Row>
  );
};

export default Footer;
