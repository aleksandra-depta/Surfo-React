import { Link } from "react-router-dom";

import { HeadingH1, HeadingH2, TextMedium } from "../../styled/typography";

import Logo from "../../img/logo.png";
import { FormNewsletter, Newsletter } from "./newsletter.styles";

const Newsletters = () => {
  return (
    <Newsletter>
      <Link to="/">
        <img className="cta__logo" alt="Surfo" src={Logo} />
      </Link>
      <HeadingH1>Join us</HeadingH1>
      <TextMedium>
        Get special discount on your <br /> first adventure with us
      </TextMedium>
      <HeadingH2>Newsletters</HeadingH2>
      <FormNewsletter>
        <input
          className="input__cta"
          type="email"
          placeholder="me@example.com"
          required
        />
        <button className="cta__btn btn btn__main btn__main--add">
          Sign me up
        </button>
      </FormNewsletter>
    </Newsletter>
  );
};

export default Newsletters;
