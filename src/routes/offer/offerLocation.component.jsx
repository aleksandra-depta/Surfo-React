import { useSelector } from "react-redux";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import { CardContainer, SectionContainer } from "./offer.styles";

const OfferLocation = ({ tours }) => {
  const { selectedOptionLocation, showOffer, showLocationOffer } = useSelector(
    (store) => store.searchTab
  );

  return (
    <>
      {!showOffer && showLocationOffer && selectedOptionLocation && (
        <SectionContainer>
          <CardContainer>
            {tours
              .filter((item) => item.island === selectedOptionLocation)
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
    </>
  );
};

export default OfferLocation;
