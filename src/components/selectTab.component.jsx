import { useContext } from "react";
import { Link } from "react-router-dom";
import { OfferContext } from "../contexts/offerSelected.context";

import Select from 'react-select'
import DatePicker from "react-datepicker";
import Logo from '../img/logo.png'
import "react-datepicker/dist/react-datepicker.css";

const optionsType = [
  { value: 'Water Sports', label: 'sailing' },
  { value: 'Water Sports', label: 'surfing' },
  { value: 'Water Sports', label: 'diving' },
  { value: 'Water Sports', label: 'windsurfing' },
  { value: 'Hiking Time', label: 'hiking' },
  { value: 'Day Trip', label: 'day trip' }
];

const optionsLocation = [
  { value: 'Tenerife', label: 'Tenerife' },
  { value: 'Lanzarote', label: 'Lanzarote' },
  { value: 'Fuerteventura', label: 'Fuerteventura' },
  { value: 'Gran Canaria', label: 'Gran Canaria' },
  { value: 'La Palma', label: 'La Palma' },
  { value: 'La Gomera', label: 'La Gomera' },
  { value: 'El Hierro', label: 'El Hierro' }
]
const optionsTravelers = [];
(function(){
  let i=1;
  while (i<=8){
    optionsTravelers.push({value: `${i}`, label: `${i}`})
    i++
  }
})();

const SelectTab = () => {

  const { selectedOptionType, setSelectedOptionType } = useContext(OfferContext);
  const { selectedOptionLocation, setSelectedOptionLocation } = useContext(OfferContext);
  const { selectedTravelers, setselectedTravelers } = useContext(OfferContext);
  const { startDate, setStartDate } = useContext(OfferContext);
  const { endDate, setEndDate} = useContext(OfferContext);

  return (
    <div className="search">
      <div className="search__form" name="search">
        <div className="select__bar search__item search__item--traveler">
          <Select 
            className="select__type"
            defaultValue={selectedTravelers}
            onChange={setselectedTravelers}
            options={optionsTravelers}
            placeholder='1 Traveler'
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#f9bd24',
                primary: '#6fa3a3',
              },
            })}

          />
        </div>
        <div className="select__bar search__item search__item--type">
          <Select 
            className="select__type"
            defaultValue={selectedOptionType}
            onChange={setSelectedOptionType}
            options={optionsType}
            placeholder='Type/Activity'
            selectedOptionType={selectedOptionType}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#f9bd24',
                primary: '#6fa3a3',
              },
            })}
          />
        </div>
        <div className="select__bar search__item search__item--to">                  
          <Select 
            className="select__where"
            defaultValue={selectedOptionLocation}
            onChange={setSelectedOptionLocation}
            options={optionsLocation}
            placeholder='Island'
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#f9bd24',
                primary: '#6fa3a3',
              },
            })}
          />
        </div>
        <div className="select__bar search__item search__item--depart">
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div className="select__bar search__item search__item--return">
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        </div>
        <img src={Logo} className="select__logo" alt='logo'/>
        { window.location.pathname === '/offer' ? 
          <div className="select__text">
            <h3 className="heading__4">Adventures with us</h3>
            <h3 className="text__description text__description--dark"><Link to="/login" className="link btnAuthSignUp">Join us and get discount on your first adventure! </Link></h3>
          </div>
        : 
          <Link to='/offer' className="search__btn btn btn__main">Let's Go</Link>                
        }
      </div>
    </div>
  )
}

export default SelectTab;