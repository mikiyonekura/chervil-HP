import { Grid } from '@material-ui/core'
import React from 'react'

import BodyCard2 from './BodyCard2'
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import BodyCard3 from './BodyCard3';


function Content3(props) {
    const { posts } = props;
    console.log(posts);

    // const handleDelete = (idToDelete) => {
    //     const updatedTaskList = taskList.filter(task => task.id !== idToDelete);
    //     setTaskList(updatedTaskList);
    // };

    const getCardContent = (post, index) => {
        return (
            <Grid item xs={12} sm={4} key={index}>
                {/* <BodyCard2 {...post} onDelete={handleDelete} /> */}
                <BodyCard3 {...post} />
            </Grid>
        );
    };
    return (
        <Grid container spacing={2}>
            {posts.map(post => getCardContent(post,uuidv4()))}
        </Grid>
    )
}

export default Content3
