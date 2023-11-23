import { useDispatch, useSelector } from "react-redux";
import {
  hideLocation,
  hideType,
  showAllOffer,
  showLocation,
  showType,
} from "../../features/searchTabSlice";

import { ClearLink, Heading, HeadingContainer } from "./offer.styles";

const OfferNav = () => {
  const {
    selectedOptionType,
    selectedOptionLocation,
    showOffer,
    showTypeOffer,
    showLocationOffer,
  } = useSelector((store) => store.searchTab);
  const dispatch = useDispatch();

  return (
    <>
      {!showOffer && (
        <HeadingContainer>
          {selectedOptionType && (
            <Heading
              active={showTypeOffer}
              onClick={(e) => {
                dispatch(showType());
                dispatch(hideLocation());
              }}
            >
              {selectedOptionType}
            </Heading>
          )}
          {selectedOptionLocation && (
            <Heading
              active={showLocationOffer}
              onClick={(e) => {
                dispatch(hideType());
                dispatch(showLocation());
              }}
            >
              {selectedOptionLocation}
            </Heading>
          )}
          <ClearLink
            onClick={(e) => {
              dispatch(showAllOffer());
            }}
          >
            <ion-icon size="large" name="close-outline"></ion-icon>
            clear all
          </ClearLink>
        </HeadingContainer>
      )}
    </>
  );
};

export default OfferNav;
