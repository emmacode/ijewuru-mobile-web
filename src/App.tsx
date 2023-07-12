import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";
import { Home } from "./pages/Home";

import "./App.css";
import "./asset/css/style.css";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
