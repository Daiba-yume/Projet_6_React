import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import LogementPage from "./pages/Logement/LogementPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/About" component={AboutPage} />
        <Route path="/Home" component={HomePage} />
        <Route path="/Logement" component={LogementPage} />
        <Route path="/PageNotFound" component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
