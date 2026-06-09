import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/gallery";
import ApplyPage from "./pages/ApplyPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import AchievementsPage from "./pages/AchievementsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/academics" element={<AcademicsPage />} />

        <Route path="/admissions" element={<AdmissionsPage />} />

        <Route path="/facilities" element={<FacilitiesPage />} />

        <Route path="/achievements" element={<AchievementsPage />} />

        <Route path="/news" element={<NewsPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;