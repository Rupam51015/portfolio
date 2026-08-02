import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/cards.css";
import "./styles/buttons.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/components.css";
import "./styles/animations.css";
import "./styles/hero.css";
import "./App.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/projects.css";
import "./styles/experience.css";
import "./styles/achievements.css";
import "./styles/certifications.css";
import "./styles/github.css";
import "./styles/devopslab.css";
import "./styles/pipeline.css";
import "./styles/footer.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);