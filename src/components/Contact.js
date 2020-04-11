import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Waves from './WavesTop';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(6),
  },
  title: {
    fontSize: 36,
    fontWeight: theme.typography.fontWeightBold,
    color: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#fff'
  },
}));

const email = 'victerryso@gmail.com'
const link = 'mailto:victerryso@gmail.com'

const Contact = function (props) {
  const classes = useStyles()

  return (
    <>
      <Waves />

      <Container className={classes.container} maxWidth='md'>
        <Typography variant='h5' gutterBottom className={classes.title}>
          Get in touch?
        </Typography>

        <Typography variant='body1' paragraph className={classes.text}>
          Message me at <Link href={link} className={classes.text}><strong>{email}</strong></Link>
        </Typography>
      </Container>
    </>
  )
}

export default Contact;
