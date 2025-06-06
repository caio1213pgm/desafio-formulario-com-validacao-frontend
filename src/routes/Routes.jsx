import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home.jsx";
import WelcomePage from "../pages/WelcomePage.jsx";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}