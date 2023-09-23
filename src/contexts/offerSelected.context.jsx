import { createContext, useState } from "react";

export const OfferContext = createContext({
  setOfferSelected: () => null,
  offerSelected: null,
});

export const OfferProvider = ({ children }) => {
  const [selectedOptionType, setSelectedOptionType] = useState(null);
  const [selectedOptionLocation, setSelectedOptionLocation] = useState(null);
  const [selectedTravelers, setselectedTravelers] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  const value = { 
    selectedOptionType, setSelectedOptionType, 
    selectedOptionLocation, setSelectedOptionLocation,  
    selectedTravelers, setselectedTravelers,
    startDate, setStartDate,
    endDate, setEndDate
  };

  return <OfferContext.Provider value={value}>{children}</OfferContext.Provider>;
};