import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import LogementPage from "./pages/Logement/LogementPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <div className="mainContainer">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/About" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/Logement/:id" element={<LogementPage />} />
            <Route path="/PageNotFound" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
