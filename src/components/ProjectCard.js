import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: 0,
    paddingTop: `${100 / 1.6}%`,
    marginBottom: theme.spacing(1)
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  title: {
    fontWeight: 700,
    marginTop: theme.spacing(1),
  },
  chips: {
    height: theme.spacing(5),
    width: '100%',
    overflow: 'hidden',
    margin: theme.spacing(0, -0.5, 2)
  },
  chip: {
    ...theme.shape,
    margin: theme.spacing(0.5),
    cursor: 'pointer',
    boxShadow: theme.shadows[1],
    background: theme.palette.common.white,
  },
  description: {
    fontSize: 20,
  }
}));

const ProjectCard = function (props) {
  let classes = useStyles()
  let [elevation, setElevation] = useState(1)

  return (
    <>
      <div className={classes.root}>
        <Link href={props.url}>
          <Paper
            className={classes.paper}
            style={{ backgroundImage: `url(${props.image})` }}
            elevation={elevation}
            onMouseOut={() => setElevation(1)}
            onMouseOver={() => setElevation(5)}
          />
        </Link>
      </div>

        <div className={classes.chips}>
          {props.chips.map((text, index) => (
            <Chip
              className={classes.chip}
              label={text}
              key={index}
            />
          ))}
        </div>

      <Typography variant='h6' color='textPrimary' gutterBottom>
        {props.url ? (
          <Link className={classes.title} href={props.url}>
            {props.name}
          </Link>
          ): (
          <span className={classes.title}>
            {props.name}
          </span>
        )}
      </Typography>

      <Typography variant='body1' color='textPrimary' paragraph className={classes.description}>
        {props.description}
      </Typography>
    </>
  )
}

export default ProjectCard