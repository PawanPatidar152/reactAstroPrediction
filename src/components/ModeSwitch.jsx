import React from "react";
import "../App.css";
const ModeSwitch = ({ onToggle, isDarkMode }) => {
  return (
    <div className="Switch">
      <div class="mode-switch">
        <label className="mode-switch" id="mode-toogle-text" for="mode-toggle" >
          Mode:
          <span id="mode-text">{isDarkMode ? "🌙 Dark" : "🌞 Light"}</span>
        </label>
        <input type="checkbox" checked={isDarkMode} onChange={onToggle} id="mode-toggle"  />
      </div>
    </div>
  );
};

export default ModeSwitch;
