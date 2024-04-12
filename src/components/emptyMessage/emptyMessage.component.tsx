import { ButtonRawWhite } from "../../styled/buttons";
import { HeadingH2 } from "../../styled/typography";
import { Content, HeadingContainer } from "./emptyMessage.styles";

const EmptyMessage = ({ message }: { message: string }) => {
  return (
    <Content>
      <HeadingContainer>
        <HeadingH2> {message} </HeadingH2>
      </HeadingContainer>
      <ButtonRawWhite to="/offer"> our offer</ButtonRawWhite>
    </Content>
  );
};

export default EmptyMessage;
