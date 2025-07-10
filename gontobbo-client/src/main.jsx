import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

const originalLog = console.log;

console.log = (...args) => {
  originalLog(...args); // still show in browser

  if (import.meta.env.DEV) {
    fetch("/__log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ args }),
    }).catch(() => {});
  }
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
