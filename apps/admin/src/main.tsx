import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "ui-styles/src/variables.css"
import "ui-styles/src/animations.css"

import "./style.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
