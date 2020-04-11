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
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(3)
  },
}));

const ProjectGrid = function (props) {
  let classes = useStyles()

  let companies = projects.map(({ company }) => company)
    .reduce((memo, company) => {
      return memo.includes(company) ? memo : [...memo, company]
    }, [])

  let getProjects = company => {
    return projects.filter(project => project.company === company)
  }

  return (
    <div className={classes.root}>
      <Container>
        {companies.map((company, index) => (
          <div className={classes.company} key={index}>
            <Typography variant='h4' className={classes.title} gutterBottom>
              {company}
            </Typography>

            <Grid container spacing={5} className={classes.grid}>

              {getProjects(company).map(({ name, description, background, technologies, url }, index) => (
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