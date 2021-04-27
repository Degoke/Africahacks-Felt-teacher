import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import NavBar from '../../components/navbar'
import useStyles from './style'

const Faqs = (): React.ReactElement => {
  const classes = useStyles()
  const faqs = [
    'question',
    'question',
    'question',
    'question',
    'question',
    'question',
    'question',
  ]
  return (
    <div>
      <NavBar page="profile" />
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={8}>
              <Typography variant="h3" color="secondary">
                Have Questions?
              </Typography>
              <Typography color="secondary">
                We&apos;ve Got the answers...
              </Typography>
            </Grid>
            <Grid item xs={4}>
              Image
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={4}>
          {faqs.map((q) => (
            <Grid item xs={6} key={q}>
              <Paper className={classes.pad}>
                <Typography>{q}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Faqs
