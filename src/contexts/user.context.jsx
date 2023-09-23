import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  setBooking: () => null,
  booking: [],
});

export const UserProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ booking, setBooking ] = useState([]);

  const token = cookies.get('jwt');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  useEffect(() => {
    if (cookies.get('jwt')) {
      axios.get(`http://127.0.0.1:4000/api/v1/users/me`, { headers })
      .then(response => {
        const currentUser = response.data.data.data;
        setCurrentUser(currentUser)
      })
    }
  }, []);

  useEffect(() => {
    if (cookies.get('jwt')) {
      axios.get(`http://127.0.0.1:4000/api/v1/users/64f108a2a23827048b180347/booking`, { headers })
      .then(response => {
        const booking = response.data.data.data;
        setBooking(booking)
      })
    }
  }, []);

  const value = { currentUser, setCurrentUser, booking, setBooking };
  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};