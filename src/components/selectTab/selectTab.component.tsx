import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  optionsLocation,
  optionsTravelers,
  optionsType,
} from "../../services/dataSelectTab";
import {
  activeScrollToOffer,
  hideAllOffer,
  hideLocation,
  hideType,
  selectEndDate,
  selectLocation,
  selectStartDate,
  selectTravelers,
  selectType,
  showLocation,
  showType,
} from "../../features/searchTabSlice";

import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const SelectTab = ({
  refName,
}: {
  refName?: React.RefObject<HTMLDivElement>;
}) => {
  const { selectedOptionType, selectedOptionLocation, startDate, endDate } =
    useAppSelector((store) => store.searchTab);
  const dispatch = useAppDispatch();

  return (
    <>
      <SearchTabContainer>
        <Content>
          <Column>
            <Row>
              <InputTab>
                <Select
                  className="select__where"
                  onChange={(e: any) => {
                    dispatch(selectLocation(e.value));
                    dispatch(hideAllOffer());
                    dispatch(hideType());
                    dispatch(showLocation());
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
                <Select
                  className="select__type"
                  onChange={(e: any) => {
                    dispatch(selectType(e.value));
                    dispatch(hideAllOffer());
                    dispatch(showType());
                    dispatch(hideLocation());
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
                  className="select__type"
                  onChange={(e: any) => {
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
              <LogoTab src={Logo} alt="logo" loading="lazy" />
            </CenterContainer>
            {window.location.pathname === "/offer" ? (
              <ButtonTab
                to=""
                onClick={() => {
                  refName?.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Let's Go
              </ButtonTab>
            ) : (
              <ButtonTab
                to="/offer"
                onClick={() => {
                  dispatch(activeScrollToOffer());
                }}
              >
                Let's Go
              </ButtonTab>
            )}
          </Column>
        </Content>
      </SearchTabContainer>
    </>
  );
};

export default SelectTab;
