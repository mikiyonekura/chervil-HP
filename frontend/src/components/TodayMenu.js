import React from 'react'
import Navigation from "./Navigation";
import { useState,useEffect } from 'react'



const TodayMenu = () => {

  const [fruits, setFruits] = useState('');
  useEffect(() =>{
    fetch('/fruits')
      .then((res) => res.json())
      .then((data) => setFruits(data[0].image ));
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
    <p>{fruits}</p>
    <button onClick={handleClick}>post</button>
      本日のメニューを動的に追加及び削除できるシステムで管理者のみ変更できるようにしたい
    </div>
    
  )
}

export default TodayMenu
