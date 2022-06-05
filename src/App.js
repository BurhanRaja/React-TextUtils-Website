import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {

  // Dark Mode Code
  const [mode, setMode] = useState('light')

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#3c3c3c'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    {/* The given arguements are props passed in Navbar function */}
    {/* mode, togglemode for dark mode for body and different html text*/}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> 
    <TextForm heading="Enter text to Analyze" mode={mode} toggleMode={toggleMode}/>
    {/* <About /> */}
    </>
  );
}

export default App;
