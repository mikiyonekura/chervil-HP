import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


function BodyCard2(props) {
    const { avatarUrl, text, image, ingre, price } = props;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card variant="outlined">
            <CardHeader
                style={{ height: "30px" }} 
                action={
                <IconButton aria-label="settings">
                    <StarBorderOutlinedIcon />
                </IconButton>
                }

                title={text}

                
            />
            <CardMedia style={{ height: "200px" }} image={image} />
            <CardContent>
            <Typography style={{height:"50px"}} variant="body2" component="p">
                {ingre}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">詳細をみる</Button>
            </CardActions>
        </Card>
    );
}

export default BodyCard2

