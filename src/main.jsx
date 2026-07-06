import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/theme.css";
import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/cards.css";
import "./styles/footer.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);