import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    // background: 'rgba(255, 255, 255, 0.9)',
    // color: '#303030',
    // backdropFilter: 'blur(10px)',
  },
  title: {
    flexGrow: 1,
  },
}));


const Header = function (props) {
  const classes = useStyles()
  const trigger = useScrollTrigger();

  return (
    <div className={classes.root}>
      <Slide appear={false} direction="down" in={trigger}>
        <AppBar position="fixed" className={classes.nav}>
          <Toolbar>
            <h3 className={classes.title}>
              Munch with Victerry
            </h3>
          </Toolbar>
        </AppBar>
      </Slide>
    </div>
  )
}

export default Header;
