import React, { Component } from 'react';
import './Nav.css';


class Header extends Component {


    render() {
       return ( 
           <>       
        <div className="header" style={{fontSize:'3.5em'}}> 🆆 🅾 🆁 🅳 🅻 🅴 🆁 </div>      
          <div>  
        <nav className="Navbar">
        <ul>
            <li>
                <a href="/game" className='game'> Game </a>
            </li>
            <li>
                <a href="/highscore" className="highscore"> Highscore </a>
            </li>
            <li>
                <a href="/info" className="info"> Info </a>
            </li>
        </ul>
    </nav>  
    </div> 
    </>
       )}
}

export default Header;