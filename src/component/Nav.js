import React from 'react'
import { Link } from 'react-router-dom';
function Nav(props) {
 
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>
      </ul>
     <button className='btn4' onClick={props.onTap} style={{backgroundColor:"blue", padding:"18px", borderRadius:"10px"}}></button>&nbsp;&nbsp;
     <button className='btn4' onClick={props.yellowbtn}style={{backgroundColor:"yellow", padding:"18px", borderRadius:"10px"}}></button>&nbsp;&nbsp;
     <button className='btn4' onClick={props.greenbtn}style={{backgroundColor:"green", padding:"18px", borderRadius:"10px"}}></button>&nbsp;&nbsp;
     <button className='btn4' onClick={props.redbtn}style={{backgroundColor:"red", padding:"18px", borderRadius:"10px"}}></button>&nbsp;&nbsp;

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>

  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </form>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Nav;
