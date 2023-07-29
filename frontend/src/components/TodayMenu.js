import React from 'react'
import Navigation from "./Navigation";
import { useState,useEffect } from 'react'
import SweatsList from './SweatsList';

import Content2 from './Content2';
import { Grid } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Header from './Header';




const TodayMenu = () => {

  //非同期でpostボタンが押されるたびにpost通信を行う
  const handleClick = async (inputText) => {
    try {
      const response = await fetch("/sweats", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nameOfSweats: inputText}),
      });
  
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
  
      const data = await response.json();
      const image = data.image;
      const price = data.price;
      const ingre = data.ingre;
  
      setTaskList([
        ...taskList, 
        {id: taskList.length,
        text: inputText,
        image: image,
        ingre: ingre,
        price: price,
        }
      ]);
    } catch (error) {
      console.error('Fetch failed:', error);
    }

    console.log(taskList);
    //ボタンが押されたらテキストボックスの中身を空にする
    setInputText("");
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
    handleClick(inputText);
    /*イベントのeでformのたびに際レンダリングされて、
    出力が消えてしまうデフォルトの機能を無効化*/
    e.preventDefault();
    //ボタンが押されたらその時のテキストボックスの中身を表示
    //console.log(inputText);

  };

  return (
    
    <div className='container'>
      <div id ="contents">
      <Header />
      <Navigation />
      
      {/*<h2>管理者のみ実行できるようにしたい</h2>*/}
      
      {/*

      <div className="input-sweets">
        <form onSubmit={handleSubmit}>
          
          <input type='text' onChange={handleChange} value={inputText} />
          <button >追加</button>
        </form>
      </div>  

      */}

      {/*<SweatsList taskList={taskList} setTaskList={setTaskList}/>*/}

    <div className="input-sweets">
      <Grid container direction="column">
        <Grid item>
          
          <form onSubmit={handleSubmit}>
            <TextField 
              style={{ height: "80px" }}
              label="お菓子の名前"
              variant="outlined"
              value={inputText}
              onChange={handleChange}
           
            />
            <Button variant="contained" style={{ height: "53px" }} endIcon={<SendIcon />}>
              登録
            </Button>
          </form>

        </Grid>

        <Grid item container>
          <Grid item sm={2} />
          <Grid item xs={12} sm={8}>
          <Content2 taskList={taskList}/>

          </Grid>
          <Grid item sm={2} />
        </Grid>
      </Grid>
      
      
      </div>
    </div>
    </div>
    
  )
}

export default TodayMenu
