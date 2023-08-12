import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  name: {
    fontSize: 36,
    fontWeight: theme.typography.fontWeightBold,
  },
  text: {
    fontSize: 24,
  }
}));

const Introduction = function (props) {
  const classes = useStyles()

  return (
    <Container maxWidth='md'>
      <Typography variant='body1' paragraph color='textSecondary' className={classes.text}>
        Howdy there! I'm
      </Typography>

      <Typography variant='h5' gutterBottom color='textPrimary' className={classes.name}>
        Victerry So
      </Typography>

      <Typography variant='body1' paragraph color='textPrimary' className={classes.text}>
        <strong>Senior Software Engineer</strong> working at <strong>Hireup</strong>
      </Typography>

      <Typography variant='body1' paragraph color='textPrimary' className={classes.text}>
        Personal focuses on rapid prototyping, data analytics and visualisations
      </Typography>
    </Container>
  )
}

export default Introduction;
