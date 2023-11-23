import { useSelector } from "react-redux";

import CardSmall from "../../components/cardSmall/cardSmall.component";

import { HeadingH2 } from "../../styled/typography";
import { CardContainer, SectionContainer } from "./offer.styles";

const OfferSeeMore = ({ tours }) => {
  const { selectedOptionType, selectedOptionLocation, showOffer } = useSelector(
    (store) => store.searchTab
  );

  return (
    <>
      {!showOffer && selectedOptionLocation && selectedOptionType && (
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
      {!showOffer && selectedOptionLocation && selectedOptionType === "" && (
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
      {!showOffer && selectedOptionType && selectedOptionLocation === "" && (
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
    </>
  );
};

export default OfferSeeMore;
