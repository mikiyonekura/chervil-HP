import React from 'react'
import Navigation from "./Navigation";

import { Grid } from '@material-ui/core';
import Content from './Content';


const Galary = () => {
  return (
    <div>
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
    </div>

    
  )
}

export default Galary
