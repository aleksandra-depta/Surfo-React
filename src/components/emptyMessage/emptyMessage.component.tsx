import { ButtonBlack, ButtonRawWhite } from "../../styled/buttons";
import { HeadingH2 } from "../../styled/typography";
import { Content } from "./emptyMessage.styles";

const EmptyMessage = ({ message }: { message: string }) => {
  return (
    <Content>
      <HeadingH2> {message} </HeadingH2>
      <ButtonRawWhite to="/offer"> our offer</ButtonRawWhite>
    </Content>
  );
};

export default EmptyMessage;
