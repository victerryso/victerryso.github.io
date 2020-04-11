import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    padding: theme.spacing(12, 0)
  },
}));

const Section = function (props) {
  let classes = useStyles()

  return (
    <div className={classes.root} style={{ background: props.color, ...props.style, }}>
      {props.children}
    </div>
  )
}

export default Section