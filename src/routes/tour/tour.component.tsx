import { useRef } from "react";
import type { Tour } from "../../models/tour";
import IonIcon from "@reacticons/ionicons";

import Reviews from "../../components/reviews/reviews.component";
import Comments from "../../components/comments/comments.component";
import Footer from "../../components/footer/footer.component";
import CardTour from "../../components/cardTour/cardTour.component";
import IconArrowC from "../../components/iconArrow/iconArrow.component";

import { CardSection, IconArrowHeader, Section } from "./tour.styles";
import CardTourDescription from "../../components/cardTourDescription/cardTourDescription.component";

const TourPage = ({ tour }: { tour: Tour }) => {
  const sectionDescription = useRef<HTMLDivElement>(null);
  const sectionReview = useRef<HTMLDivElement>(null);
  const sectionComment = useRef<HTMLDivElement>(null);

  return (
    <>
      <CardSection>
        <CardTour tour={tour} />
        <IconArrowHeader
          onClick={() => {
            sectionDescription.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <IonIcon size="large" name="chevron-down-outline" />
        </IconArrowHeader>
      </CardSection>

      <Section ref={sectionDescription}>
        <CardTourDescription tour={tour} />
        <IconArrowC refName={sectionReview} />
      </Section>

      <Section ref={sectionReview}>
        <Reviews tour={tour} />
        <IconArrowC refName={sectionComment} />
      </Section>
      <Section ref={sectionComment}>
        <Comments tour={tour} />
      </Section>
      <Footer />
    </>
  );
};

export default TourPage;
