import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#031632";
      showalert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode enabled", "success");
    }
  };
  return (
    <>
        <Navbar
          title="TextUtils"
          // about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4"> 
            <TextArea
              showalert={showalert}
              heading="please enter your text"
              mode={mode}/>
           
            </div>
            </>
  );
}

export default App;
