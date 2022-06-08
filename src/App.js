import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./containers/HomePage";
import LeaguePage from "./containers/LeaguePage";
import MatchesPage from "./containers/Matches";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/league/:id" element={<LeaguePage />} />
        <Route path="/matches/:id" element={<MatchesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
