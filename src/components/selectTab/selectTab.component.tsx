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
  Content,
  InputTab,
  InputTabSmall,
  SearchTabContainer,
} from "./selectTab.styles";
import IonIcon from "@reacticons/ionicons";
import { Col, Row } from "react-bootstrap";

const SelectTab = () => {
  const { selectedOptionType, selectedOptionLocation, startDate, endDate } =
    useAppSelector((store) => store.searchTab);
  const dispatch = useAppDispatch();

  return (
    <>
      <SearchTabContainer>
        <Content>
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
          <InputTabSmall>
            <DatePicker
              selected={startDate}
              onChange={(e) => {
                dispatch(selectStartDate(e));
              }}
            />
          </InputTabSmall>
          <InputTabSmall>
            <DatePicker
              selected={endDate}
              onChange={(e) => dispatch(selectEndDate(e))}
            />
          </InputTabSmall>
          <ButtonTab
            to=""
            onClick={() => {
              window.scrollTo({ top: 1000, left: 0, behavior: "smooth" });
            }}
          >
            <IonIcon size="large" name="search-outline"></IonIcon>
          </ButtonTab>
        </Content>
      </SearchTabContainer>
    </>
  );
};

export default SelectTab;
