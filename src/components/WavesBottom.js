import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    bottom: -4,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 5,
  },
  svg: {
    width: '100%'
  }
}));

const Waves = function (props) {
  let classes = useStyles()

  const [height, setHeight] = useState(window.innerWidth / 10)

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth / 10);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className={classes.root}>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 170" className={classes.svg} style={{ height }}>
        <defs>
          <linearGradient x1="49.253%" y1="85.804%" x2="49.253%" y2="43.074%" id="a">
            <stop stopColor="#FFF" offset="0%" />
            <stop stopColor="#FFF" offset="100%" />
          </linearGradient>
        </defs>

        <g fill="none">
          <path d="M1920 4.719v69.5c-362.63 60.036-692.797 55.536-990.5-13.5C565.833-23.615 256 12.813 0 170L1 4.719h1919z" fill="url(#a)" transform="rotate(180 960.5 87.36)" />
          <path d="M1 170V99c269.033-70.44 603.533-66.44 1003.5 12C1494 207 1921 4.719 1921 4.719L1920 170H1z" fillOpacity=".3" fill="#FFF" />
          <path d="M1 170.75V99C373.115 4.216 705.281-4.951 997.5 71.5c365.667 95.667 673.5 73.406 923.5-66.781l-1 166.031H1z" fillOpacity=".3" fill="#FFF" />
          <path d="M1 170v-67C400.333-1.333 744.167-19 1032.5 50c432.5 103.5 754 19.219 888.5-45.281l-1 166.031L1 170z" fillOpacity=".35" fill="#FFF" />
        </g>
      </svg>
    </div>
  )
}

export default Waves

