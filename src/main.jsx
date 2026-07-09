import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import Guide from "./pages/Guide";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogUpcoming from "./pages/BlogUpcoming";
import About from "./pages/About";
import Faq from "./pages/Faq";
import FaqCategory from "./pages/FaqCategory";
import Pathway from "./pages/Pathway";

import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/cards.css";
import "./styles/footer.css";
import "./styles/pages.css";
import "./styles/guide-page.css";
import "./styles/faq.css";
import "./styles/blog-ticker.css";
import "./styles/pathway.css";

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
          <Route path="blog/upcoming/:slug" element={<BlogUpcoming />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="about" element={<About />} />
          <Route path="pathway" element={<Pathway />} />
          <Route path="faq" element={<Faq />} />
          <Route path="faq/:category" element={<FaqCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);