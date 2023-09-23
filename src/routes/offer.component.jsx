import { useContext } from "react";
import { OfferContext } from "../contexts/offerSelected.context";
import Navigation from "../components/nav.component";
import CardSmall from "../components/cardSmall.component";
import SelectTab from "../components/selectTab.component";
import Footer from "../components/footer.component";

const OfferPage = ( {tours} ) => {

  const { selectedOptionType } = useContext(OfferContext);
  const { selectedOptionLocation } = useContext(OfferContext);

  return (
    <div>
      <Navigation/>
  
        <div className="offer" >      
          <div className="offer__content">
            <div className="search__offerPage">
              <SelectTab />
            </div>
            <div>
              { selectedOptionType &&
                <div>
                  <h3 className="offer__heading heading__4">{selectedOptionType.value}</h3>  
                  <div className="cards__searched cards__small">
                    {tours.filter(item => item.type === selectedOptionType.value).map(tour => <CardSmall key={tour._id} tour={tour}/>)}  
                  </div>
                </div>
              }
              { selectedOptionLocation &&
                <div>
                  <h3 className="offer__heading heading__4">{selectedOptionLocation.value}</h3>  
                  <div className="cards__small cards__searched">
                    {tours.filter(item => item.island === selectedOptionLocation.value).map(tour => <CardSmall key={tour._id} tour={tour}/>)} 
                  </div>
                </div>
              }
              { selectedOptionLocation && selectedOptionType &&
                <div>
                  <h3  className="offer__heading heading__4">See more</h3>  
                  <div className="cards__small">
                    {tours.filter(item => item.type !== selectedOptionType.value && item.island !== selectedOptionLocation.value ).map(tour => <CardSmall key={tour._id} tour={tour}/>)} 
                  </div>
                </div>
              }
              { selectedOptionLocation && selectedOptionType === null &&
                <div>
                  <h3  className="offer__heading heading__4">See more</h3>  
                  <div className="cards__small">
                    {tours.filter(item => item.island !== selectedOptionLocation.value ).map(tour => <CardSmall key={tour._id} tour={tour}/>)} 
                  </div>
                </div>
              }
              { selectedOptionType && selectedOptionLocation === null &&
                <div>
                  <h3  className="offer__heading heading__4">See more</h3>  
                  <div className="cards__small">
                    {tours.filter(item => item.type !== selectedOptionType.value ).map(tour => <CardSmall key={tour._id} tour={tour}/>)} 
                  </div>
                </div>
              }
              { selectedOptionType === null && selectedOptionLocation === null  &&  
                <div className="cards__small">
                  {tours.filter(item => item).map(tour => <CardSmall key={tour._id} tour={tour}/>)} 
                </div>
              }
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default OfferPage;