import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import "../App.css";

export default function Posts() {
    const [posts, setPosts] = useState({});

    useEffect(() => {

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(response => response.posts)
            .then(data => setPosts(data))
            .catch(error => console.log(error));

    }, []);


    return (
        <Grid container spacing={2}>
            {Array.isArray(posts) && posts.map(post => (

                <Grid item key={post.id} xs={12} sm={6} md={4}>

                    <Card className='card'>

                        <CardContent>

                            <Typography variant="h5" component="h2">
                                {post.title}
                            </Typography>

                            <Typography variant="body2" component="p">
                                {post.body}
                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>
            ))}
        </Grid>
    );
}