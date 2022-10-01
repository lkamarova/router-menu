import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import TimeAttackPage from "./components/TimeAttackPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="drift" element={<DriftPage />} />
          <Route path="timeattack" element={<TimeAttackPage />} />
          <Route path="forza" element={<ForzaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
