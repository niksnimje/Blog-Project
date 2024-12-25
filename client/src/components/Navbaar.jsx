import { Link } from "react-router-dom";
import "./Navbaar.css"

export default function Navbaar() {
  return (
    <>
      <div class="landing-page">
      <header>
          <div class="container">
            <a href="/" class="logo" style={{fontSize:"25px",textDecoration:"none"}} >You <b style={{color:"red"}}>Notes</b></a>
            <ul class="links ps-0">
             
              <Link to="/about" style={{fontSize:"20px",textDecoration:"none",color:"white"}}>About Us</Link>
              <Link to="/notes"  style={{fontSize:"20px",textDecoration:"none",paddingLeft:"30px",color:"white"}}>Your Notes</Link>
              <Link to="/create"  style={{fontSize:"20px",textDecoration:"none",paddingLeft:"30px",color:"white"}}>Create Notes</Link>
              <Link to="/singin" style={{fontSize:"20px",textDecoration:"none",color:"white"}}><li>Get Started</li></Link>
              
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
