import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Loign.jsx";
import Signup from "./pages/Signup.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import MyProvider from "./context/MyProvider.jsx";
import Apply from "./pages/Apply.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  </StrictMode>
);
