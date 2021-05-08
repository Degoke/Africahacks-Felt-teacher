import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getParentJobs, getSchoolJobs } from '../../../api/api'
import useStyles from '../style'

type JobsProps = {
  job: string
}

const Jobs = ({ job }: JobsProps): React.ReactElement => {
  const classes = useStyles()

  const { data: jobs, isLoading, isError, isSuccess } = useQuery(
    job,
    job === 'Schools' ? getSchoolJobs : getParentJobs
  )

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography>Jobs</Typography>
          </Grid>
          {isError && <Typography>Something went wrong</Typography>}
          {isLoading && <Typography>Loading...</Typography>}
          {isSuccess &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            jobs.data.map((j: any) => (
              <Grid item key={j.shortNoteAboutTeacherYouWant}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Grid container justify="space-between" alignItems="center">
                      <Grid item>
                        <Avatar />
                      </Grid>
                      <Grid item>
                        <Typography>{j.neededTeacher}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography>{j.shortNoteAboutTeacherYouWant}</Typography>
                  </Grid>

                  <Grid item>
                    <Button
                      component={Link}
                      to={`/profile/${
                        job === 'Schools' ? 'school' : 'parent'
                      }/${j.owner[0]}`}
                    >
                      Details
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Jobs
