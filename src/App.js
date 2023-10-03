import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./contexts/user.context";

import HomePage from "./routes/home/home.component";
import OfferPage from "./routes/offer.component";
import LoginPage from "./routes/login.component";
import SignUpPage from "./routes/signUp.component";
import TourPage from "./routes/tour.component";
import MyAccount from "./routes/myAccount.component";
import MyFavorites from "./routes/myFavorites.component";
import MyBooking from "./routes/myBooking.component";
import ShoppingCart from "./routes/shoppingCart.component";

const App = () => {
  const [tours, setTours] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/v1/tours")
      .then((response) => response.json())
      .then((tours) => setTours(tours.data.data));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage tours={tours} />} />
      <Route path="/offer" element={<OfferPage tours={tours} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {tours.map((tour) => (
        <Route
          key={`tour${tour._id}`}
          path={`/tour/${tour._id}`}
          element={<TourPage tour={tour} />}
        />
      ))}
      <Route path="/shoppingCart" element={<ShoppingCart tours={tours} />} />
      {currentUser ? (
        <Route path="/">
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/myAccount/booking" element={<MyBooking />} />
          <Route path="/myAccount/favorites" element={<MyFavorites />} />
        </Route>
      ) : (
        ""
      )}
    </Routes>
  );
};

export default App;
