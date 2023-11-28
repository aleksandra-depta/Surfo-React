import { ButtonPrimary } from "../../styled/buttons";
import { HeadingH2 } from "../../styled/typography";
import { Content } from "./emptyMessage.styles";

const EmptyMessage = ({ message }) => {
  return (
    <Content>
      <HeadingH2> {message} </HeadingH2>
      <ButtonPrimary to="/offer">See our offer</ButtonPrimary>
    </Content>
  );
};

export default EmptyMessage;
