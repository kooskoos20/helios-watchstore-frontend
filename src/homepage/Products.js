import React from 'react';
import ProductCard from './ProductCard';
import {Fragment} from 'react'
import {LoaderHOC} from '../helpers/LoaderHOC';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  message: {
    display: 'flex',
    padding: '5% 0 30% 0',
  }
})
export default LoaderHOC(function (props) {
    const classes = useStyles()
    if(!props.products.length) return <div className={classes.message}>No products found</div>
    return (
        <>
            {props.products.map((product, index) => <Fragment key={index}>
                <ProductCard product={product} />
            </Fragment>)}
        </>
    )
}, 'products')