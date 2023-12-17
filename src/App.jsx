import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import NumerologyCalculator from "./components/NumerologyCalculator";
import ModeSwitch from "./components/ModeSwitch";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return (
    <div className="App">
      <ModeSwitch onToggle={toggleMode} isDarkMode={isDarkMode} />
      <NumerologyCalculator />
    </div>
  );
}

export default App;
