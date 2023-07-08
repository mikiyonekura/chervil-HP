import { Grid } from '@material-ui/core'
import React from 'react'
import BodyCard from './BodyCard'
import BodyCard2 from './BodyCard2'
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";



const cardContents = [
    {
        title: "タイトル1",
        subheader: "サブヘッダー1",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
    {
        title: "タイトル2",
        subheader: "サブヘッダー2",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
    {
        title: "タイトル3",
        subheader: "サブヘッダー3",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
    {
        title: "タイトル4",
        subheader: "サブヘッダー4",
        avatarUrl: "https://joeschmoe.io/api/v1/random",
        imageUrl: "https://picsum.photos/150"
    },
]

const cardContents2 =[         
    {

        text: "クッキー",
        image: "/cookie.png",
        ingre: "aaaa",
        price: "3000",

    },
    {

        text: "クッキー",
        image: "/cookie.png",
        ingre: "aaaa",
        price: "3000",

    },

    {
    
        text: "3hahahahaha",
        image: "/cookie.png",
        ingre: "aaaa",
        price: "3000",

    }
]


function Content2(props) {
    const { taskList } = props;
    const getCardContent2 = (getObj, index) => {
        return (
            <Grid item xs={12} sm={4} key={index}>
                <BodyCard2 {...getObj} />
            </Grid>
        );
    };
    return (
        <Grid container spacing={2}>
            {taskList.map(contentObj => getCardContent2(contentObj,uuidv4()))}
        </Grid>
    )
}

export default Content2
