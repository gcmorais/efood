import { useLocation, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";

function RoutesPage() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default RoutesPage;
