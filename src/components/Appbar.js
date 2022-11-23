// Importing files from Material-UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';
import {IconButton} from '@mui/material';
import {MenuIcon} from '@mui/material';
  
// Using Inline Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
  
const AppBar = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" 
            className={classes.menuButton} 
            color="inherit" aria-label="menu">
              <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Geeks for Geeks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBar;
