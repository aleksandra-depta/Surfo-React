import { useDispatch, useSelector } from "react-redux";
import {
  optionsLocation,
  optionsTravelers,
  optionsType,
} from "../../services/dataSelectTab";
import {
  selectEndDate,
  selectLocation,
  selectStartDate,
  selectTravelers,
  selectType,
} from "../../features/searchTabSlice";

import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { HeadingH2, LinkPrimary } from "../../styled/typography";
import {
  ButtonTab,
  CenterContainer,
  Column,
  Content,
  InputTab,
  LogoTab,
  Row,
  SearchTabContainer,
} from "./selectTab.styles";

import Logo from "../../img/logo.png";

const SelectTab = () => {
  const dispatch = useDispatch();
  const { selectedOptionType, selectedOptionLocation, startDate, endDate } =
    useSelector((store) => store.searchTab);

  return (
    <div>
      <SearchTabContainer>
        <Content>
          <Column>
            <Row>
              <InputTab>
                <Select
                  className="select__type"
                  onChange={(e) => {
                    dispatch(selectTravelers(e.value));
                  }}
                  options={optionsTravelers}
                  placeholder="1 Traveler"
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: "#f9bd24",
                      primary: "#6fa3a3",
                    },
                  })}
                />
              </InputTab>
              <InputTab>
                <Select
                  className="select__type"
                  onChange={(e) => {
                    dispatch(selectType(e.value));
                  }}
                  defaultValue={selectedOptionType}
                  options={optionsType}
                  placeholder="Type/Activity"
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: "#f9bd24",
                      primary: "#6fa3a3",
                    },
                  })}
                />
              </InputTab>
            </Row>
            <Row>
              <InputTab>
                <Select
                  className="select__where"
                  onChange={(e) => {
                    dispatch(selectLocation(e.value));
                  }}
                  defaultValue={selectedOptionLocation}
                  options={optionsLocation}
                  placeholder="Island"
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: "#f9bd24",
                      primary: "#6fa3a3",
                    },
                  })}
                />
              </InputTab>
              <InputTab>
                <DatePicker
                  selected={startDate}
                  onChange={(e) => {
                    dispatch(selectStartDate(e));
                  }}
                />
              </InputTab>
              <InputTab>
                <DatePicker
                  selected={endDate}
                  onChange={(e) => dispatch(selectEndDate(e))}
                />
              </InputTab>
            </Row>
          </Column>
          <Column>
            <CenterContainer>
              <LogoTab src={Logo} alt="logo" />
            </CenterContainer>
            {window.location.pathname === "/offer" ? (
              <CenterContainer>
                <HeadingH2>Adventures with us</HeadingH2>
                <LinkPrimary to="/login">
                  Join us and get discount on your first adventure!
                </LinkPrimary>
              </CenterContainer>
            ) : (
              <ButtonTab to="/offer">Let's Go</ButtonTab>
            )}
          </Column>
        </Content>
      </SearchTabContainer>
    </div>
  );
};

export default SelectTab;
