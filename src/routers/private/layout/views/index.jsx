import React from 'react';
import {withRouter} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import AppBar from '../../../../shared/components/appBar'

const Layout = ({children}) => {

    return(
        <Grid>
            <AppBar/>
            {children}
        </Grid>
    )

}


export default withRouter(Layout);