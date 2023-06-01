import React from 'react'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
    <div id="footermenu" className="inner">
        <ul>
        <li className="title">タイトル</li>
        <li><Link to ="/TodayMenu" >メニューサンプル</Link></li>
        <li><Link to ="/TodayMenu" >メニューサンプル</Link></li>

        </ul>
        <ul>
        <li className="title">タイトル</li>
        <li><Link to ="/TodayMenu" >メニューサンプル</Link></li>
        <li><Link to ="/TodayMenu" >メニューサンプル</Link></li>

        </ul>
        <ul>
        <li className="title">タイトル</li>
        <li><Link to ="/TodayMenu" >メニューサンプル</Link></li>
        <li><Link to ="/TodayMenu" >メニューサンプル</Link></li>
 
        </ul>

    </div>
    </footer>


  )
}

export default Footer
