import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";

import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
