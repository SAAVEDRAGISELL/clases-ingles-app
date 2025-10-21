import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Clases particulares de inglés</h1>
      <p>Aprende de manera divertida y efectiva</p>
      <button onClick={toggleMode}>
        Cambiar a {darkMode ? "modo claro" : "modo oscuro"}
      </button>
    </div>
  );
}

export default App;
