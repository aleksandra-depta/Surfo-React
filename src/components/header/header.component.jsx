import SelectTab from "../selectTab.component";

import { HeadingH1, HeadingH2, HeadingH3 } from "../../styled/typography";
import { HeaderContainer, Content } from "./header.styles";

const Header = () => {

  return (
    <HeaderContainer>
      <Content>
        <HeadingH1>Take a Break</HeadingH1>
        <HeadingH2>on Canary Islands</HeadingH2>
        <HeadingH3>Book unique adventure</HeadingH3>            
        <SelectTab />
      </Content>
    </HeaderContainer>
  )
}

export default Header;