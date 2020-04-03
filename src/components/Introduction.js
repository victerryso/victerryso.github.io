import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
    <>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <Typography variant='body1' paragraph color='textSecondary' className={classes.text}>
              Howdy there! I'm
            </Typography>

            <Typography variant='h5' gutterBottom color='textPrimary' className={classes.name}>
              Victerry So
            </Typography>

            <Typography variant='body1' paragraph color='textPrimary' className={classes.text}>
              <strong>Full Stack Developer</strong> working at the <strong>University of Sydney</strong>.
            </Typography>

            <Typography variant='body1' paragraph color='textPrimary' className={classes.text}>
              Personal focuses on rapid prototyping, data analytics and visualisations.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Introduction;
