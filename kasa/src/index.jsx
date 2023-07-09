import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {" "}
    {/* A quoi sert StrictMode et si on veut l'eliminer comment on fait ? */}
    <App />
  </React.StrictMode>
);
