import { useContext } from "react";
import { OfferContext } from "../../contexts/offerSelected.context";

import CardSmall from "../../components/cardSmall/cardSmall.component";
import SelectTab from "../../components/selectTab/selectTab.component";
import Footer from "../../components/footer/footer.component";

import { HeadingH2 } from "../../styled/typography";
import { CardContainer, SectionContainer } from "./offer.styles";

const OfferPage = ({ tours }) => {
  const { selectedOptionType } = useContext(OfferContext);
  const { selectedOptionLocation } = useContext(OfferContext);

  return (
    <>
      <SelectTab />
      {selectedOptionType && (
        <SectionContainer>
          <HeadingH2>{selectedOptionType.value}</HeadingH2>
          <CardContainer>
            {tours
              .filter((item) => item.type === selectedOptionType.value)
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
      {selectedOptionLocation && (
        <SectionContainer>
          <HeadingH2>{selectedOptionLocation.value}</HeadingH2>
          <CardContainer>
            {tours
              .filter((item) => item.island === selectedOptionLocation.value)
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
                  item.type !== selectedOptionType.value &&
                  item.island !== selectedOptionLocation.value
              )
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
      {selectedOptionLocation && selectedOptionType === null && (
        <SectionContainer>
          <HeadingH2>See more</HeadingH2>
          <CardContainer>
            {tours
              .filter((item) => item.island !== selectedOptionLocation.value)
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
      {selectedOptionType && selectedOptionLocation === null && (
        <SectionContainer>
          <HeadingH2>See more</HeadingH2>
          <CardContainer>
            {tours
              .filter((item) => item.type !== selectedOptionType.value)
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
      {selectedOptionType === null && selectedOptionLocation === null && (
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
