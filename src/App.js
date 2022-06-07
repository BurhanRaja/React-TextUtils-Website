import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  // Dark Mode Code
  const [mode, setMode] = useState('light')
  const [alerts, setAlerts] = useState(null);

  // Show Alerts and assign setAlerts to some value
  const showAlerts = (messages, types) => {
    setAlerts({
      message: messages,
      type: types
    })
    // Time for alerts
    setTimeout(() => {
      setAlerts(null)
    }, 1500);
  }

  // To toggle Dark Mode
  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(10 16 48)'
      showAlerts("Dark Mode Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlerts("Dark Mode Disable", "success")
    }
  }

  return (
    <>
    {/* The given arguements are props passed in Navbar function */}
    {/* mode, togglemode for dark mode for body and different html text*/}
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alerts}/>
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlerts} heading="Enter text to Analyze" mode={mode}/>}> </Route>
          <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
