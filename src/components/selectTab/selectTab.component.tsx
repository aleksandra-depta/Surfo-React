import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  optionsLocation,
  // optionsTravelers,
  optionsType,
} from "../../services/dataSelectTab";
import {
  hideAllOffer,
  hideLocation,
  hideType,
  selectEndDate,
  selectLocation,
  selectStartDate,
  // selectTravelers,
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
  DateContent,
  InputTabSelect,
  InputTabSmall,
  SearchTabContainer,
  SelectContent,
} from "./selectTab.styles";
import IonIcon from "@reacticons/ionicons";

const SelectTab = ({
  refName,
}: {
  refName: React.RefObject<HTMLDivElement>;
}) => {
  const { selectedOptionType, selectedOptionLocation, startDate, endDate } =
    useAppSelector((store) => store.searchTab);
  const dispatch = useAppDispatch();

  const executeScroll = () => refName.current?.scrollIntoView();

  return (
    <>
      <SearchTabContainer>
        <Content>
          <SelectContent>
            <InputTabSelect>
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
            </InputTabSelect>
            <InputTabSelect>
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
            </InputTabSelect>
            {/* <InputTab>
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
            </InputTab> */}
          </SelectContent>
          <DateContent>
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
          </DateContent>
        </Content>
        <ButtonTab to="" onClick={executeScroll}>
          <IonIcon size="large" name="search-outline"></IonIcon>
        </ButtonTab>
      </SearchTabContainer>
    </>
  );
};

export default SelectTab;
