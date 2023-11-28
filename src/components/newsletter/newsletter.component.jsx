import { useState } from "react";
import { Link } from "react-router-dom";
import InfoMessageInput from "../input/infoMessage.component";

import { HeadingH1, HeadingH2, TextMedium } from "../../styled/typography";
import { ButtonSecondary } from "../../styled/buttons";
import { Input } from "../../styled/inputs";
import {
  Content,
  FormNewsletter,
  ImageBackground,
  Newsletter,
} from "./newsletter.styles";

import Logo from "../../img/logo.png";
import Background from "../../img/cta-1400.jpg";

const Newsletters = () => {
  const [infoMessage, setInfoMessage] = useState(false);

  return (
    <Newsletter>
      <ImageBackground src={Background} />
      <Content>
        <Link to="/">
          <img className="cta__logo" alt="Surfo" src={Logo} />
        </Link>
        <HeadingH1>Join us</HeadingH1>
        <TextMedium>
          Get special discount on your <br /> first adventure with us
        </TextMedium>
        <HeadingH2>Newsletters</HeadingH2>
        <FormNewsletter>
          <Input type="email" placeholder="me@example.com" required />
          {infoMessage && <InfoMessageInput />}
          <ButtonSecondary type="submit" onClick={() => setInfoMessage(true)}>
            Sign me up
          </ButtonSecondary>
        </FormNewsletter>
      </Content>
    </Newsletter>
  );
};

export default Newsletters;
