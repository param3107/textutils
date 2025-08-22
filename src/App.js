import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // 'light' or 'dark'
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black"; // Dark mode background
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"; // Light mode background
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
            <TextForm heading="Enter text" mode={mode} showAlert={showAlert}/>
          {/* <Routes>
            <Route exact  path="/about" element={<About mode={mode} />} />
          </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

