import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { linksGroup, socialMediaIcons } from "../../services/dataFooter";
import { navHomeActive, navHomeInactive } from "../../features/navSlice";

import { HeadingH3, LinkGrey, TextSmall } from "../../styled/typography";
import { IconSocialMedia } from "../../styled/icons";
import { Column, Icons, ImageLogo, Row } from "./footer.styles";

import Logo from "../../img/logo.png";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <Row>
      <Column>
        <Link
          to="/"
          onClick={() => {
            dispatch(navHomeActive());
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          <ImageLogo alt="Surfo" src={`${Logo}`} />
        </Link>
        <Icons>
          {socialMediaIcons.map((el) => (
            <Link
              to={el.link}
              target="_blank"
              key={el.name}
              onClick={() => {
                dispatch(navHomeInactive());
                window.scrollTo({ top: 0, left: 0 });
              }}
            >
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
        <Column key={group.name}>
          <HeadingH3>{group.name}</HeadingH3>
          {group.array.map((el) => (
            <LinkGrey
              to="/login"
              key={el.name}
              onClick={() => {
                dispatch(navHomeInactive());
                window.scrollTo({ top: 0, left: 0 });
              }}
            >
              {el.name}
            </LinkGrey>
          ))}
        </Column>
      ))}
    </Row>
  );
};

export default Footer;
