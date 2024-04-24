import { useState } from "react";
import InfoMessageInput from "../input/infoMessage.component";
import { HeadingH1, HeadingH2 } from "../../styled/typography";
import { ButtonBlack } from "../../styled/buttons";
import { Input } from "../../styled/inputs";
import {
  Content,
  FormContainer,
  FormNewsletter,
  Heading,
  InfoContent,
  Newsletter,
} from "./newsletter.styles";

const Newsletters = () => {
  const [infoMessage, setInfoMessage] = useState<boolean>(false);

  return (
    <Newsletter>
      <Content>
        <Heading>explore</Heading>
        <FormContainer>
          <HeadingH1>Newsletter</HeadingH1>
          <HeadingH2>
            Get special discount on your first adventure with us
          </HeadingH2>
          <FormNewsletter>
            <Input type="email" placeholder="me@example.com" required />
            <ButtonBlack
              to=""
              onClick={(e) => {
                e.preventDefault();
                setInfoMessage(true);
              }}
            >
              Sign me up
            </ButtonBlack>
          </FormNewsletter>
          <InfoContent>{infoMessage && <InfoMessageInput />}</InfoContent>
        </FormContainer>
      </Content>
    </Newsletter>
  );
};

export default Newsletters;
