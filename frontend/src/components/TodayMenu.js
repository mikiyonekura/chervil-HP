import React from 'react'
import Navigation from "./Navigation";
import { useState,useEffect } from 'react'



const TodayMenu = () => {


  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[])


  const handleClick = async () => {
    await fetch("/img", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nameOfSweets: "オートミールチョコクッキー"}),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

  };
  return (
    <div>
    <Navigation />
    <p>{message}</p>
    <button onClick={handleClick}>post</button>
      本日のメニューを動的に追加及び削除できるシステムで管理者のみ変更できるようにしたい
    </div>
    
  )
}

export default TodayMenu
