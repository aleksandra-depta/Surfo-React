import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useAuthQuery, useGetToursQuery } from "./services/toursApi";

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

import Cookies from "universal-cookie";
import { useEffect } from "react";

const cookies = new Cookies();
const token = cookies.get("jwt");

const App = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetToursQuery();

  let tours;
  if (isSuccess) {
    tours = data.data.data;
  }

  useAuthQuery(token);
  const { currentUser } = useSelector((store) => store.auth);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {isSuccess && (
          <>
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
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/confirmation" element={<Confirmation />} />
            {currentUser !== null && (
              <Route path="/" element={<UserProfile />}>
                <Route path="/myAccount/user" element={<MyAccount />} />
                <Route path="/myAccount/booking" element={<MyBooking />} />
                <Route path="/myAccount/favorites" element={<MyFavorites />} />
              </Route>
            )}
          </>
        )}
      </Route>
    </Routes>
  );
};

export default App;
