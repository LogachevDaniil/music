import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./UI/App/App";
import reportWebVitals from "./reportWebVitals";
import { ProviderContextWrapper } from "./UI/Context/ProviderContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProviderContextWrapper>
      <App />
    </ProviderContextWrapper>
  </React.StrictMode>
);
reportWebVitals();
