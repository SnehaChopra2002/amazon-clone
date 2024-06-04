import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51OyD51SFw49bCftFtzYv9bkVZVi0KIDBQpolUBPmLkvL3X1FCZ3UI22CVszTSCkIAWL7qrcGfSiso6wN5htSnRYe00pINjvsJA"
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Will only run once when the App reloads
    // onAuthStateChange is a listener
    onAuthStateChanged(auth, (authUser) => {
      console.log("The USER is >>> ", authUser?.email);
      if (authUser) {
        // user abhi bhi logged in hai
        console.log("We are in the if block");
        console.log("email: ", authUser.email, " uid: ", authUser.uid);
        dispatch(
          setUser({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        // user logged out hai
        dispatch(setUser(null)); // Pass null when user is logged out
        console.log("We are in else block");
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            {/* <h1>Login page</h1> */}
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payments">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
