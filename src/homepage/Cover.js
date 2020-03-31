import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        height: '100vh',
        color: '#fff',
    },
    content: {
        textAlign: 'center',
        padding: '20% 15%',
        fontSize: '40px'
    },
    logo: {
        padding: '1% 0 1% 5%',
        margin: '0',
        color:'#000'
    },
    cover:{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("static/images/cover.jpg")',
        height:'100%'
    }
})

export default function Cover() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h1 className={classes.logo}>Helios Watch Store</h1>
            <div className={classes.cover}>
                <div className={classes.content}>Check out our exclusive collection of chosen watches and choose the watch that defines you!</div>
            </div>
        </div>
    )
}