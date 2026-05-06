import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FluentProvider, webLightTheme } from "@fluentui/react-components"; // Import the provider and a theme
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FluentProvider theme={webLightTheme} style={{ width: "100%" }}>
      <App />
    </FluentProvider>
  </StrictMode>,
);
