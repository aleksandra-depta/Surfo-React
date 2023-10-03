import CardSmall from "../../components/cardSmall/cardSmall.component";
import CardMedium from "../../components/cardMedium/cardMedium.component";
import CardLarge from "../../components/cardLarge/cardLarge.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import Navigation from "../../components/nav/nav.component";
import Newsletters from "../../components/newsletter/newsletter.component";
import { BackgroundImage } from "./home.styles";
import BackgroundHeaderImg from "../../img/hero-1400.jpg";

const HomePage = ({ tours }) => {
  return (
    <>
      <Navigation />
      <BackgroundImage src={BackgroundHeaderImg} />
      <Header />
      <section className="cards cards__large">
        {tours
          .filter((item) => item.cardLarge === "ok")
          .map((tour) => (
            <CardLarge key={tour._id} tour={tour} />
          ))}
      </section>
      <section className="cards cards__section">
        <h3 className="cards__heading heading__4">Places you can not missed</h3>
        <div className="cards__small">
          {tours
            .filter((item) => item.cardSmall === "ok")
            .map((tour) => (
              <CardSmall key={tour._id} tour={tour} />
            ))}
        </div>
      </section>
      <section className="cards cards__section">
        <h3 className="cards__heading heading__4">The most Popular</h3>
        <div className="cards__medium">
          {tours
            .filter((item) => item.cardMedium === "ok")
            .map((tour) => (
              <CardMedium key={tour._id} tour={tour} />
            ))}
        </div>
      </section>
      <Newsletters />
      <Footer />
    </>
  );
};

export default HomePage;
