import React from 'react'
import {Link} from "react-router-dom";
import HomePage from './HomePage';

const Footer = () => {
  return (
    <footer>
    <div id="footermenu" className="inner">
        <ul>

        <li><Link to = "/" >HOME</Link></li>
  
        </ul>
        <ul>

        <li><Link to ="/galary" >GALLARY</Link></li>

        </ul>
        <ul>
  
        <li><Link to ="http://chervil.php.xdomain.jp/form.php" >CONTACT</Link></li>
      
        </ul>

    </div>
    </footer>


  )
}

export default Footer
