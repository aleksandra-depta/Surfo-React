import { ButtonSecondary } from "../../styled/buttons";
import { HeadingH2 } from "../../styled/typography";
import { Content } from "./emptyMessage.styles";

const EmptyMessage = ({ message }) => {
  return (
    <Content>
      <HeadingH2> {message} </HeadingH2>
      <ButtonSecondary to="/offer">See our offer</ButtonSecondary>
    </Content>
  );
};

export default EmptyMessage;
