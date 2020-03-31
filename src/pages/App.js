import React, { useEffect, useState } from 'react';
import '../App.css'
import { makeStyles } from '@material-ui/core/styles'
import Cover from '../homepage/Cover';
import Footer from '../homepage/Footer';
import Products from '../homepage/Products';
import { getAllProducts } from '../repositories/repositories';


const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '5% 5% 0 5%',
    padding: '0%',
  }
})

function App() {
  const [products, setProducts] = useState(undefined)
  const [error, setError] = useState("")
  useEffect(() => {
    getAllProducts(setProducts, setError)
  }, [])

  const classes = useStyles()
  if (error) return <div>{error}</div>
  return (
    <>
      <Cover />
      <div className={classes.wrapper}>
        <Products products={products} />
      </div>
      <Footer />
    </>
  );
}

export default App;
