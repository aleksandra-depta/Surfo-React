import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./contexts/user.context";

import HomePage from "./routes/home/home.component";
import OfferPage from "./routes/offer/offer.component";
import LoginPage from "./routes/auth/login.component";
import SignUpPage from "./routes/auth/signUp.component";
import TourPage from "./routes/tour/tour.component";
import MyAccount from "./routes/userProfile/myAccount.component";
import MyFavorites from "./routes/userProfile/myFavorites.component";
import MyBooking from "./routes/userProfile/myBooking.component";
import ShoppingCart from "./routes/shoppingCart/shoppingCart.component";
import Navigation from "./components/nav/nav.component";
import AuthPage from "./routes/auth/auth.component";
import UserProfile from "./routes/userProfile/userProfile.component";
import Confirmation from "./routes/confirmation/confirmation.component";

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
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage tours={tours} />} />
        <Route path="/offer" element={<OfferPage tours={tours} />} />

        <Route path="/" element={<AuthPage />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {tours.map((tour) => (
          <Route
            key={`tour${tour._id}`}
            path={`/tour/${tour._id}`}
            element={<TourPage tour={tour} />}
          />
        ))}

        <Route path="/shoppingCart" element={<ShoppingCart tours={tours} />} />

        <Route path="/confirmation" element={<Confirmation />} />

        {currentUser && (
          <Route path="/" element={<UserProfile />}>
            <Route path="/myAccount" element={<MyAccount />} />
            <Route path="/myAccount/booking" element={<MyBooking />} />
            <Route path="/myAccount/favorites" element={<MyFavorites />} />
          </Route>
        )}
      </Route>
    </Routes>
  );
};

export default App;
