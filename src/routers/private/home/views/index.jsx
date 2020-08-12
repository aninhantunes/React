import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from '../../../../shared/components/cards'
import HomeManager from '../homeManager';
import {Grid} from '@material-ui/core';

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
            <Grid container className = {classes.root} justify = 'center'>
                <Grid item>
                    <Grid container direction = 'row' spacing = {2} justify = 'center'>
                        {products.map(item =>  (
                        <Grid item>
                            <Cards 
                                key = {`keyCard${item.id}`} 
                                name = {item.name} 
                                description = {item.description} 
                                price = {item.price} 
                                previousPrice = {item.previousPrice} 
                                ratings = {item.ratings} 
                                image = {item.image}
                            />
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        )

}

const useStyles = makeStyles((theme) => ({

    root: {
        padding : theme.spacing(2),
    }

}));

export default Home;