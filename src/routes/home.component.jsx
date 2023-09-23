import CardSmall from "../components/cardSmall.component";
import CardMedium from "../components/cardMedium.component";
import CardLarge from "../components/cardLarge.component";
import Footer from "../components/footer.component";
import Header from "../components/header.component";
import Navigation from "../components/nav.component";
import Newsletters from "../components/newsletter.component";

const HomePage = ({ tours }) => {

  return (
    <div>
      <Navigation/>
      <div className="home">
        <header className="home__header">
          <Header/>
          <section className="cards cards__large">
            {tours.filter(item => item.cardLarge === "ok").map(tour => <CardLarge key={tour._id} tour={tour}/>)}
          </section>        
        </header>
        <section className="cards cards__section">
          <h3 className="cards__heading heading__4">Places you can not missed</h3>
          <div className="cards__small">
            {tours.filter(item => item.cardSmall === "ok").map(tour => <CardSmall key={tour._id} tour={tour}/>)}
          </div>
        </section>
        <section className="cards cards__section">
          <h3 className="cards__heading heading__4">The most Popular</h3>
          <div className="cards__medium">
            {tours.filter(item => item.cardMedium === "ok").map(tour => <CardMedium key={tour._id} tour={tour}/>)}
          </div>
        </section>
        <Newsletters/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage;