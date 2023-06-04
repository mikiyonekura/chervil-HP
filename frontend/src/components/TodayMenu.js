import React from 'react'
import Navigation from "./Navigation";
import { useState,useEffect } from 'react'
import SweatsList from './SweatsList';



const TodayMenu = () => {

  
  const [fruits, setFruits] = useState('');
 /*   
 useEffect(() =>{
    fetch('/fruits')
      .then((res) => res.json())
      .then((data) => setFruits(data.name));
  },[]) */

  //非同期でpostボタンが押されるたびにpost通信を行う
  const handleClick = async (addText) => {
    await fetch("/img", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nameOfSweets: "オートミールチョコクッキー",name: addText}),
    })
      .then((response) => response.json())
      //.then((data) => console.log(data));

  };


  
  //tasklistっていう配列を作って、setTaskListで更新していく
  const [taskList, setTaskList] = useState([]);
  //inputTextっていうtextのチェックポイントを作って、setInputTextで更新していく
  const [inputText, setInputText] = useState("");

  //textがonChangeで変更されるたびに、inputTextに値を入れる
  const handleChange = (e) => {
    //inputTextにその時の値をセットしていく
    setInputText(e.target.value);
    
  };

  //ボタンが押された時の関数
  const handleSubmit = (e) => { 
    /*イベントのeでformのたびに際レンダリングされて、
    出力が消えてしまうデフォルトの機能を無効化*/
    e.preventDefault();
    //ボタンが押されたらその時のテキストボックスの中身を表示
    //console.log(inputText);

    /*...は一つ前の状態を指す。つまり前の状態のtasklistに対してinputTextを
    入れることを指す.状態はどんどん増えていく*/
    setTaskList([
      ...taskList, 
      //handledelteで使うためにidも設定
      {id: taskList.length,
        text: inputText}
    ]);

    console.log(taskList);
    //ボタンが押されたらテキストボックスの中身を空にする
    setInputText("");


  };

  return (
    <div>
    <Navigation />
    <h2>本日のメニューを動的に追加及び削除できるシステム</h2>
    <h2>管理者のみ実行できるようにしたい</h2>
    <p>{fruits}</p>

    
    <div className="input-sweets">
      <form onSubmit={handleSubmit}>
        {/* valueをinputTextにすることでテキストボックスの中身と連携*/}
        <input type='text' onChange={handleChange} value={inputText} />
        <button >追加</button>
      </form>
    </div>  

    <SweatsList taskList={taskList} setTaskList={setTaskList}/>

    {/*<button onClick={handleClick}>post</button>*/}
      
    </div>
    
  )
}

export default TodayMenu
