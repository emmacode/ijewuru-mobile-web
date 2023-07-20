import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";
import { Home } from "./pages/Home";

import "./App.css";
import "./asset/css/style.css";
import { Profile } from "./pages/UserData/Profile";
import { Favourite } from "./pages/UserData/Favourite";
import { History } from "./pages/UserData/History";
import { Orders } from "./pages/UserData/Orders";
import { Offer } from "./pages/UserData/Offer";
import { ItemDetails } from "./pages/ItemDetails";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/item:id" element={<ItemDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
