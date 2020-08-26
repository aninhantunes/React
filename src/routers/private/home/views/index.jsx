import React, { useState, useEffect } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Cards from '../../../../shared/components/cards';
import HomeManager from '../homeManager';
import { Grid, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Home = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      setProducts(await HomeManager.getProducts());
    }
    getProducts();
  }, []);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item className={classes.header} xs={12}>
        <Typography variant='h1'>Produtos</Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Grid>
      <Grid item>
        <Grid container justify='center'>
          <Grid item>
            <Grid container direction='row' spacing={2} justify='center'>
              {products.map((item) => (
                <Grid item>
                  <Cards
                    key={`keyCard${item.id}`}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    previousPrice={item.previousPrice}
                    ratings={item.ratings}
                    image={item.image}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default Home;
