import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* The given arguements are props passed in Navbar function */}
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    <TextForm heading="Enter text to Analyze"/>
    <About />
    </>
  );
}

export default App;
