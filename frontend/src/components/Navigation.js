import React from 'react'
import {Link} from "react-router-dom"

const Navigation = () => {
  return (
    <nav id="menubar">
    <ul>
    <li><Link to="/">HOME<span>ホーム</span></Link></li>
    <li><Link to="/Galary">GALLARY<span>ギャラリー</span></Link></li>
    <li><Link to="/Form">CONTACT<span>お問い合わせ</span></Link></li>
    </ul>
    </nav>
  )
}

export default Navigation
