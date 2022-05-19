
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');     // for show darkmode
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const RemoveClasses =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-worning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls)=>{
    // console.log(cls);
    RemoveClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
       setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enable', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enable', 'success');
    }
  }
  return (
    <div className="App">
       <Router>
<Navbar title="TextUtilsApp" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert  alert={alert} />
<div className='container my-3'>
  <Routes>
    <Route
     exact path="/about" element={ <About mode={mode}/>}/>
      {/* <About mode={mode}/> */}
   
    <Route exact path="/" element={ <TextForm showAlert={showAlert} heading ="TextUtils - Word Counter, character counter, remove extra space
    conver lowercase to uppercase and uppercase to lowercase "  mode={mode} />} />
   
   
  </Routes>
  </div>
  </Router>
    </div>
   
  
  );
}

export default App;
