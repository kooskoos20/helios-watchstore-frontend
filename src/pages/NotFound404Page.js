import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

function NotFound404Page() {

    return (
        <div>
            <Typography component="h2" variant="h4" gutterBottom style={{ fontSize: '30vh', textAlign: "center", margin: "25vh 0 0 0" }}>404</Typography>
            <Typography component="h1" variant='h6' gutterBottom style={{ textAlign: "center" }}>Oh no! The resource you are looking for could not be found.</Typography>
            <Link to="/"><Button variant='contained' color='primary' style={{ position: 'relative', left: '47vw' }}>BACK TO HOME</Button></Link>
        </div>

    );
}

export default NotFound404Page;