import SelectTab from "../selectTab/selectTab.component";

import { HeadingH1, HeadingH2, HeadingH3 } from "../../styled/typography";
import { Content, HeaderContainer, Headings } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <Headings>
          <HeadingH1>Take a Break</HeadingH1>
          <HeadingH2>on Canary Islands</HeadingH2>
          <HeadingH3>Book unique adventure</HeadingH3>
        </Headings>
        <SelectTab />
      </Content>
    </HeaderContainer>
  );
};

export default Header;
