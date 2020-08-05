import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from '../../../../shared/components/cards'
import HomeManager from '../homeManager';

const Home = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts(){
            setProducts(await HomeManager.getProducts());
        }
        getProducts();
    })

        return(
            <div>
                {products.map(item => (<Cards key = {`keyCard${item.id}`} name = {item.name} description = {item.description} price = {item.price} 
                previousPrice = {item.previousPrice} ratings = {item.ratings} image = {item.image}/>))}
            </div>
        )

}

const useStyles = makeStyles((theme) => ({

}));

export default Home;