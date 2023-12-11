import type { Tour } from "../../models/tour";
import Reviews from "../../components/reviews/reviews.component";
import Comments from "../../components/comments/comments.component";
import Footer from "../../components/footer/footer.component";
import CardTour from "../../components/cardTour/cardTour.component";

import { CardSection, Section } from "./tour.styles";
import CardTourDescription from "../../components/cardTourDescription/cardTourDescription.component";

const TourPage = ({ tour }: { tour: Tour }) => {
  return (
    <>
      <CardSection>
        <CardTour tour={tour} />
      </CardSection>

      <Section>
        <CardTourDescription tour={tour} />
      </Section>

      <Section>
        <Reviews tour={tour} />
      </Section>
      <Section>
        <Comments tour={tour} />
      </Section>
      <Footer />
    </>
  );
};

export default TourPage;
