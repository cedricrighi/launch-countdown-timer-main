import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.css";
import App from "./App.tsx";

const root = document.getElementById("root");
root &&
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
