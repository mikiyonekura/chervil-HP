import React from 'react'
import Navigation from "../parts/Navigation";

import { Grid } from '@material-ui/core';

import Login from './Login';
import Header from '../parts/Header';


const Signin = () => {
  return (
    <div className="container">
      
      
      <Navigation />

      <Login />

      {/*
      <Grid container direction="column">
        <Grid item>
          カードを表示してみる
        </Grid>
        <Grid item container>
          <Grid sm={2} />
          <Grid xs={12} sm={8}>
            <Content />

          </Grid>
          <Grid sm={2} />
        </Grid>
      </Grid>
      */}
    </div>

    
  )
}

export default Signin
