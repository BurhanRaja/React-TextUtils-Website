import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

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
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alerts}/>
    <TextForm showAlert={showAlerts} heading="Enter text to Analyze" mode={mode}/>
    {/* <About /> */}
    </>
  );
}

export default App;
