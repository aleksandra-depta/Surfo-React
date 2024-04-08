import type { Tour } from "../../models/tour";
import HeaderTour from "../../components/headerTour/headerTour,component";
import CardTour from "../../components/cardTour/cardTour.component";
import CardTourDescription from "../../components/cardTourDescription/cardTourDescription.component";
import Newsletters from "../../components/newsletter/newsletter.component";
import ReviewsTour from "../../components/reviewsTour/reviewsTour.component";
import Footer from "../../components/footer/footer.component";
import MapSection from "../../components/mapSection/mapSection.component";

const TourPage = ({ tour }: { tour: Tour }) => {
  return (
    <>
      <HeaderTour tour={tour} />
      <CardTour tour={tour} />
      <CardTourDescription tour={tour} />
      <MapSection tour={tour} />
      <ReviewsTour tour={tour} />
      <Newsletters />
      <Footer />
    </>
  );
};

export default TourPage;
