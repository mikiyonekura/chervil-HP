import React from 'react'
import Navigation from "./Navigation";
import { useState,useEffect } from 'react'
import SweatsList from './SweatsList';

import Content2 from './Content2';
import { Grid } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Header from './Header';
import { Link } from 'react-router-dom';




const TodayMenu = () => {

  
  
  //tasklistっていう配列を作って、setTaskListで更新していく
  const [taskList, setTaskList] = useState([]);


  return (
    
    <div className='container'>
      <div id ="contents">

      <Navigation />
      
      {/*<h2>管理者のみ実行できるようにしたい</h2>*/}

    <div className="input-sweets">

      <Grid container direction="column">
        <Grid item>
          <Link to ="/TodayMenuAd">
          <Button  variant="contained" style={{ height: "40px" }} endIcon={<AdminPanelSettingsIcon />}>
            管理者画面
          </Button>
        </Link>


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
