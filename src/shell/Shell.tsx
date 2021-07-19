import { AppBar, Toolbar, Button, makeStyles, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ProductLanding from '../products/ProductLanding';
import SideBar from '../reuse/Sidebar';

const mainMenuItems = [
  "Ecommerce",
  "More Ideas",
  "More Ideas 2",
]

const useStyles = makeStyles((theme) => ({
  div: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  application: {
    flexGrow: 1,
  }
}));

function Shell() {
  const classes = useStyles();
  const [showProducts, setShowProducts] = useState(true);

  const switchApplication = (text: string) => {
    setShowProducts(true);
  };

  return (
    <div>
      <AppBar position="static">
          <Toolbar>
              <div className={classes.div}>
                <Button color="inherit">Login</Button>
              </div>
          </Toolbar>
      </AppBar>
      <Box display="flex">
        <SideBar onPressItem={switchApplication} itemList={mainMenuItems}/>
        {showProducts && 
          <Box flexGrow="1">
            <ProductLanding/>
          </Box>
        }
      </Box>
    </div>
  );
}

export default Shell;
