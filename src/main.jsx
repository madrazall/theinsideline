import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import Guide from "./pages/Guide";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import About from "./pages/About";

import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/cards.css";
import "./styles/footer.css";
import "./styles/pages.css";
import "./styles/guide-page.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="guides" element={<Guides />} />
          <Route path="guides/:slug" element={<Guide />} />
          <Route path="resources" element={<Resources />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);