import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'

const useStyles = makeStyles(theme => ({
  grid: {
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: 0,
    }
  },
  company: {
    marginBottom: theme.spacing(10),
    '&:last-child': {
      marginBottom: 0,
    }
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: theme.spacing(3),
  },
  title: {
    fontWeight: 700,
    marginRight: theme.spacing(2)
  },
}));

const ProjectGrid = function (props) {
  let classes = useStyles()

  let companies = projects
    .reduce((memo, { company, team }) => {
      const stringified = JSON.stringify({ company, team })
      return memo.includes(stringified) ? memo : [...memo, stringified]
    }, [])
    .map(json => JSON.parse(json));

  let getProjects = ({ company, team }) => {
    return projects.filter(project => project.company === company && project.team === team)
  }

  return (
    <div className={classes.root}>
      <Container>
        {companies.map(({ company, team }, index) => (
          <div className={classes.company} key={index}>
            <div className={classes.titleWrapper}>
            <Typography variant='h4' color='textPrimary' className={classes.title} gutterBottom>
                {company}
              </Typography>
              <Typography variant='h5' color='textSecondary' className={classes.title} gutterBottom>
                {team}
              </Typography>
            </div>

            <Grid container spacing={4} className={classes.grid}>

              {getProjects({ company, team }).map(({ name, description, background, technologies, url }, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <ProjectCard
                    name={name}
                    description={description}
                    image={background}
                    chips={technologies}
                    url={url}
                  />
                </Grid>
              ))}

            </Grid>
          </div>
       ))}
      </Container>
    </div>
  )
}

export default ProjectGrid