import { useSelector } from "react-redux";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import { CardContainer, SectionContainer } from "./offer.styles";

const OfferType = ({ tours }) => {
  const { selectedOptionType, showOffer, showTypeOffer } = useSelector(
    (store) => store.searchTab
  );

  return (
    <>
      {!showOffer && showTypeOffer && selectedOptionType && (
        <SectionContainer>
          <CardContainer>
            {tours
              .filter((item) => item.type === selectedOptionType)
              .map((tour) => (
                <CardSmall key={tour._id} tour={tour} />
              ))}
          </CardContainer>
        </SectionContainer>
      )}
    </>
  );
};

export default OfferType;
