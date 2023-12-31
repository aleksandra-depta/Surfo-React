import { useRef, useEffect } from "react";
import type { Tours } from "../../models/tours";
import { useAppSelector } from "../../hooks";

import OfferNav from "./offerNav.component";
import OfferType from "./offerType.component";
import OfferLocation from "./offerLocation.component";
import OfferSeeMore from "./offerSeeMore.component";
import CardSmall from "../../components/cardSmall/cardSmall.component";
import SelectTab from "../../components/selectTab/selectTab.component";
import Footer from "../../components/footer/footer.component";
import IconArrowC from "../../components/iconArrow/iconArrow.component";

import { CardContainer, OfferContainer, SelectContainer } from "./offer.styles";

const OfferPage = ({ tours }: { tours: Tours }) => {
  const sectionSearchTab = useRef<HTMLDivElement>(null);
  const sectionCards = useRef<HTMLDivElement>(null);

  const {
    selectedOptionType,
    selectedOptionLocation,
    showOffer,
    scrollToOffer,
  } = useAppSelector((store) => store.searchTab);

  const scrollToElement = () => {
    sectionCards.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollToOffer) {
      scrollToElement();
    }
  }, [scrollToOffer]);

  return (
    <>
      <SelectContainer ref={sectionSearchTab}>
        <SelectTab refName={sectionCards} />
        <IconArrowC refName={sectionCards} />
      </SelectContainer>

      <OfferContainer ref={sectionCards}>
        <OfferNav refName={sectionSearchTab} />
        <OfferType tours={tours} />
        <OfferLocation tours={tours} />
        <OfferSeeMore tours={tours} />
        {showOffer &&
          selectedOptionType === "" &&
          selectedOptionLocation === "" && (
            <CardContainer>
              {tours.data
                .filter((item) => item)
                .map((tour) => (
                  <CardSmall key={tour._id} tour={tour} />
                ))}
            </CardContainer>
          )}
      </OfferContainer>

      <Footer />
    </>
  );
};

export default OfferPage;
