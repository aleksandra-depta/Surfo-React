import { useContext } from "react";
import { OfferContext } from "../../contexts/offerSelected.context";

import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { HeadingH3, LinkGrey } from "../../styled/typography";
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

const optionsType = [
  { value: "Water Sports", label: "sailing" },
  { value: "Water Sports", label: "surfing" },
  { value: "Water Sports", label: "diving" },
  { value: "Water Sports", label: "windsurfing" },
  { value: "Hiking Time", label: "hiking" },
  { value: "Day Trip", label: "day trip" },
];

const optionsLocation = [
  { value: "Tenerife", label: "Tenerife" },
  { value: "Lanzarote", label: "Lanzarote" },
  { value: "Fuerteventura", label: "Fuerteventura" },
  { value: "Gran Canaria", label: "Gran Canaria" },
  { value: "La Palma", label: "La Palma" },
  { value: "La Gomera", label: "La Gomera" },
  { value: "El Hierro", label: "El Hierro" },
];
const optionsTravelers = [];
(function () {
  let i = 1;
  while (i <= 8) {
    optionsTravelers.push({ value: `${i}`, label: `${i}` });
    i++;
  }
})();

const SelectTab = () => {
  const { selectedOptionType, setSelectedOptionType } =
    useContext(OfferContext);
  const { selectedOptionLocation, setSelectedOptionLocation } =
    useContext(OfferContext);
  const { selectedTravelers, setselectedTravelers } = useContext(OfferContext);
  const { startDate, setStartDate } = useContext(OfferContext);
  const { endDate, setEndDate } = useContext(OfferContext);

  return (
    <div>
      <SearchTabContainer>
        <Content>
          <Column>
            <Row>
              <InputTab>
                <Select
                  className="select__type"
                  defaultValue={selectedTravelers}
                  onChange={setselectedTravelers}
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
                  defaultValue={selectedOptionType}
                  onChange={setSelectedOptionType}
                  options={optionsType}
                  placeholder="Type/Activity"
                  selectedOptionType={selectedOptionType}
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
                  defaultValue={selectedOptionLocation}
                  onChange={setSelectedOptionLocation}
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
                  onChange={(date) => setStartDate(date)}
                />
              </InputTab>
              <InputTab>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
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
                <HeadingH3>Adventures with us</HeadingH3>
                <LinkGrey to="/login">
                  Join us and get discount on your first adventure!{" "}
                </LinkGrey>
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
