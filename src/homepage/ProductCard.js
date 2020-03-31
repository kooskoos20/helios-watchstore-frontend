import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const styles = makeStyles({
    root: {
        display: 'flex',
        boxSizing: 'border-box',
        height:'100%',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    product_image: {
        margin: '0 10% 0 0'
    },
    product_wrapper: {
        width: '25%',
        boxSizing: 'border-box',
        height: '450px',
        padding:'2%',
        margin: '5% 0 5% 0'

    },
    product_name:{
        fontFamily:'Maven Pro',
        fontWeight:'900'
    },
    link:{
        textDecoration:'none',
        color:'#333'
    }
})

export default function (props) {
    const { product } = props
    const classes = styles()
    return (
        <div className={classes.product_wrapper}>
            <Link to={{pathname:`/product/${product.title}`}} className={classes.link}>
            <div className={classes.root}>
                <img className={classes.product_image} src={product.image_url} alt={product.title} height='300px' width='222px' />
                <div className={classes.product_name}>{product.title}</div>
            </div>
            </Link>
        </div>)
}