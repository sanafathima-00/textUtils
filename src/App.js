import { useState } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import Alert from './Components/Alert';
import About from './Components/About';

function App() {
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Light Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const changeMode = () => {
    if (mode === 'dark') {
      setMode('light')
      setText('Light Mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode has been enabled", "success")
    } else {
      setMode('dark');
      setText('Dark Mode')
      document.body.style.backgroundColor = 'black'

      showAlert("Dark Mode has been enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} changeMode={changeMode} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextBox showAlert={showAlert} heading="Enter you text here" mode={mode} />} />
            <Route path="/About" element={<About showAlert={showAlert} heading="About Us" mode={mode}/>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
