import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    root: {
        height: '300px',
        color: '#fff',
        backgroundColor: '#000',
        fontSize: '30px',
        display: 'flex',
        alignItems: 'center',
        padding:'1%'
    }
})

export default function () {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <pre>
            4894 Brookside Drive
            Birmingham,
            <br/>
            Alabama
            35203
            <br/>
            <br/>
            205-401-6165<br/>
            205-541-8743
            </pre>

        </div>
    )
}