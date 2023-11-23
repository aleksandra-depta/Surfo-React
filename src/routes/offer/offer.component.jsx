import { useSelector } from "react-redux";

import OfferNav from "./offerNav.component";
import OfferType from "./offerType.component";
import OfferLocation from "./offerLocation.component";
import OfferSeeMore from "./offerSeeMore.component";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import SelectTab from "../../components/selectTab/selectTab.component";
import Footer from "../../components/footer/footer.component";

import { CardContainer } from "./offer.styles";

const OfferPage = ({ tours }) => {
  const { selectedOptionType, selectedOptionLocation, showOffer } = useSelector(
    (store) => store.searchTab
  );

  return (
    <>
      <SelectTab />
      <OfferNav />
      <OfferType tours={tours} />
      <OfferLocation tours={tours} />
      <OfferSeeMore tours={tours} />
      {showOffer &&
        selectedOptionType === "" &&
        selectedOptionLocation === "" && (
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
