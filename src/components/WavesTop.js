import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // position: 'absolute',
    // top: -280,
    // left: 0,
    // right: 0,
    width: '100%',
    zIndex: 5,
  },
}));

const Waves = function (props) {
  let classes = useStyles()

  return (
    <div className={classes.root}>
      <svg preserveAspectRatio="none" viewBox="0 0 1920 280" xmlns="http://www.w3.org/2000/svg">
        <g fill="#fafafa">
          <path d="M1920 0v19.387c-211.21 136.245-517.564 173.305-919.061 111.18C679.068 80.763 345.422 103.907 0 200L-2 0h1922z"/>
          <path d="M1920 0v4c-252.04 171.948-554.875 231.087-908.506 177.417C361.105 82.709-2.15 200 .254 200 1.858 200 1.106 133.333-2 0h1922z" fillOpacity="0.35"/>
          <path d="M1920 0v29.724c-230.661 164.917-529.816 221.768-897.464 170.553C568.815 137.072 198.92 150.114 0 269V0h1920z" fillOpacity="0.17"/>
          <path d="M1920 0v29.724c-223.98 145.48-526.685 188.553-908.112 129.22C630.46 99.61 293.3 122.961.407 229V0H1920z" fillOpacity="0.45"/>
        </g>
      </svg>
    </div>
  )
}

export default Waves


