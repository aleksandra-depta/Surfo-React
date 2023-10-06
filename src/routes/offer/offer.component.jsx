import { useSelector } from "react-redux";

import CardSmall from "../../components/cardSmall/cardSmall.component";
import SelectTab from "../../components/selectTab/selectTab.component";
import Footer from "../../components/footer/footer.component";

import { HeadingH2 } from "../../styled/typography";
import { CardContainer, SectionContainer } from "./offer.styles";

const OfferPage = ({ tours }) => {
  const { selectedOptionType, selectedOptionLocation } = useSelector(
    (store) => store.searchTab
  );

  return (
    <>
      <SelectTab />
      {selectedOptionType && (
        <SectionContainer>
          <HeadingH2>{selectedOptionType}</HeadingH2>
          <CardContainer>
            {tours
              .filter((item) => item.type === selectedOptionType)
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
      {selectedOptionLocation && (
        <SectionContainer>
          <HeadingH2>{selectedOptionLocation}</HeadingH2>
          <CardContainer>
            {tours
              .filter((item) => item.island === selectedOptionLocation)
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
      {selectedOptionLocation && selectedOptionType && (
        <SectionContainer>
          <HeadingH2>See more</HeadingH2>
          <CardContainer>
            {tours
              .filter(
                (item) =>
                  item.type !== selectedOptionType &&
                  item.island !== selectedOptionLocation
              )
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
      {selectedOptionLocation && selectedOptionType === "" && (
        <SectionContainer>
          <HeadingH2>See more</HeadingH2>
          <CardContainer>
            {tours
              .filter((item) => item.island !== selectedOptionLocation)
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
      {selectedOptionType && selectedOptionLocation === "" && (
        <SectionContainer>
          <HeadingH2>See more</HeadingH2>
          <CardContainer>
            {tours
              .filter((item) => item.type !== selectedOptionType)
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
      {selectedOptionType === "" && selectedOptionLocation === "" && (
        <CardContainer>
          {tours
            .filter((item) => item)
            .map((tour) => (
              <CardSmall key={tour._id} tour={tour} />
            ))}
        </CardContainer>
      )}
      <Footer />
    </>
  );
};

export default OfferPage;
