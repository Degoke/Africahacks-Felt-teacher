import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Divider,
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { getMyProfile } from '../../api/api'
import NavBar from '../../components/navbar'
import decodeToken, { getToken } from '../../helpers/local-storage/decode-token'
import useStyles from './style'
import Jobs from './jobs'

const categories = ['Schools', 'Parents']

const Dashboard = (): React.ReactElement => {
  const classes = useStyles()

  const [userId, setUserId] = useState<string>('')
  const [userType, setUserType] = useState<string>('')

  const [job, setJob] = useState<string>('Schools')

  useEffect(() => {
    const token = getToken()

    if (token) {
      const { id, type } = decodeToken(token)
      setUserId(id)
      setUserType(type)
    }
  }, [])

  const { data: profile, isLoading, isError, isSuccess } = useQuery(
    ['profile', userId],
    () => getMyProfile(userType, userId)
  )

  return (
    <div>
      <NavBar page="profile" />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={2}>
          <Paper elevation={3}>
            <List dense>
              {categories.map((c) => (
                <ListItem
                  key={c}
                  id={c}
                  button
                  dense
                  divider
                  onClick={() => {
                    setJob(c)
                  }}
                >
                  <ListItemText primary={c} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Jobs job={job} />
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography>Notifications</Typography>
            {isError && <Typography>Something Went wrong</Typography>}
            {isLoading && <Typography>Loading...</Typography>}
            {isSuccess && (
              <Grid container>
                {profile.messages.map((message: string) => (
                  <Grid item key={message}>
                    {message.split(', ')[0]}
                    <br />
                    <a
                      href={`/profile/school/${message
                        .split(', ')[2]
                        .split('/')
                        .splice(5)
                        .join('/')}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                    <Divider className={classes.divider} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
