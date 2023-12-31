import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  hideLocation,
  hideType,
  showAllOffer,
  showLocation,
  showType,
} from "../../features/searchTabSlice";
import IonIcon from "@reacticons/ionicons";

import { ClearLink, Heading, HeadingContainer } from "./offer.styles";

const OfferNav = ({
  refName,
}: {
  refName: React.RefObject<HTMLDivElement>;
}) => {
  const {
    selectedOptionType,
    selectedOptionLocation,
    showOffer,
    showTypeOffer,
    showLocationOffer,
  } = useAppSelector((store) => store.searchTab);
  const dispatch = useAppDispatch();

  return (
    <>
      {!showOffer && (
        <HeadingContainer>
          {selectedOptionType && (
            <Heading
              to=""
              active={showTypeOffer}
              onClick={() => {
                dispatch(showType());
                dispatch(hideLocation());
              }}
            >
              {selectedOptionType}
            </Heading>
          )}
          {selectedOptionLocation && (
            <Heading
              to=""
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
            to=""
            onClick={(e) => {
              dispatch(showAllOffer());
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <IonIcon size="large" name="close-outline" />
            clear all
          </ClearLink>
        </HeadingContainer>
      )}
    </>
  );
};

export default OfferNav;
