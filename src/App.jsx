// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import URLShortenerPage from "./components/URLShortenerPage";
import StatisticsPage from "./components/StatisticsPage";
import RedirectHandler from "./components/RedirectHandler";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<URLShortenerPage />} />
      <Route path="/stats" element={<StatisticsPage />} />
      <Route path="/:code" element={<RedirectHandler />} />
    </Routes>
  );
}
