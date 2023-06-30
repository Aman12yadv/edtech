import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Text from './component/Text';
import { useState } from 'react';
import Alert from './Alert';
import About from "./component/About";
import Contact from './component/Contact';
import Home from './component/Home';
import Footer from './component/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


 function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setmode] = useState('light');
  
 
  const onTap =()=>{
    if(mode === 'light'  || mode === "warning" || mode==="Danger" || mode==="primary"||mode==="success" ||mode==="dark")
    {
      setmode("primary");
      document.body.style.backgroundColor="blue";
    }
  }

  const yellowbtn = () => {
    if(mode === 'light' || mode==="primary" || mode==="Danger" || mode==="warning"||mode==="success" ||mode==="success"||mode==="dark")
    {
      setmode("warning");
      document.body.style.backgroundColor="yellow";
    }
  }

  const greenbtn = () =>{
    if(mode === 'light' || mode === "primary" || mode ==="warning" || mode==="Danger" ||mode==="success" ||mode==="dark")
    {
      setmode("success");
      document.body.style.backgroundColor="green";
    }
  }
  const redbtn =()=>{
    if(mode === 'light' || mode === "primary" || mode ==="warning" ||mode==="success" ||mode==="dark")
    {
      setmode("Danger");
      document.body.style.backgroundColor="Red"
    }
  }

    const toggleMode = ()=>{
    if(mode==='light') {
       setmode('dark');
       document.body.style.backgroundColor="#042743";
      }
      else{
        setmode('light');
        document.body.style.backgroundColor="white";

      }
   }

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }


 
  return (
    <>
    <Router>
    <Nav mode={mode} onTap={onTap} toggleMode={toggleMode} yellowbtn={yellowbtn} greenbtn={greenbtn} redbtn={redbtn}  />
   
     <Routes>
      {/* <Route path='/' element={ }/> */}
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Alert' element={<Alert alert={alert}/>}/>
      <Route path='/Text' element={<Text showAlert={showAlert} mode={mode}/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
    </Router>
    


     
    
    
    </>
  );
}

export default App;
