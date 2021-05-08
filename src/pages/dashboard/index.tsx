import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Avatar,
  Typography,
  Divider,
} from '@material-ui/core'
import React from 'react'
import NavBar from '../../components/navbar'
import useStyles from './style'

const categories = ['Schools', 'Parents']

const Dashboard = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <div>
      <NavBar page="profile" />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={2}>
          <Paper elevation={3}>
            <List dense>
              {categories.map((c) => (
                <ListItem key={c} id={c} button dense divider>
                  <ListItemText primary={c} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <Avatar />
                  </Grid>
                  <Grid item>
                    <Typography>Title</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  eaque, harum dolores placeat praesentium voluptates est
                  doloremque minima corrupti neque ab fuga eligendi, nulla atque
                  voluptas omnis commodi quis iure odio quaerat. Architecto ab
                  eius consequatur aperiam sed, corporis accusantium.
                </Typography>
              </Grid>

              <Grid item>
                <Typography>Details</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography>Notifications</Typography>

            <Grid container>
              <Grid item>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                dolorem quia error necessitatibus exercitationem. Nostrum
                voluptates quae perspiciatis eius numquam.
                <Divider className={classes.divider} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
