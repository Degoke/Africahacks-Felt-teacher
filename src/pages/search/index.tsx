import React from 'react'
import {
  Button,
  ButtonGroup,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import NavBar from '../../components/navbar'
import useStyles from './style'
import ProfileCard from '../../components/profile-cards'

const Search = (): React.ReactElement => {
  const classes = useStyles()
  const categories: string[] = [
    'Science',
    'Arts',
    'Commercial',
    'Nursery & Primary',
  ]
  const groups = [
    {
      name: 'John Doe',
      text: 'insert plenty text here',
    },
    {
      name: 'John Doe',
      text: 'insert plenty text here',
    },
    {
      name: 'John Doe',
      text: 'insert plenty text here',
    },
    {
      name: 'John Doe',
      text: 'insert plenty text here',
    },
    {
      name: 'John Doe',
      text: 'insert plenty text here',
    },
    {
      name: 'John Doe',
      text: 'insert plenty text here',
    },
  ]

  return (
    <div>
      <NavBar page="profile" />
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Paper elevation={3}>
              <List dense>
                {categories.map((c) => (
                  <ListItem key={c} button dense divider>
                    <ListItemText primary={c} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={3}>
              <Grid item>
                <TextField type="search" variant="outlined" size="medium" />
              </Grid>
              <Grid item>
                <Typography>
                  We offer Experienced and qualified teachers who are capable of
                  Inculcating and building your children and preparing them for
                  being tomorrow’s leaders. Below are the list of approved
                  teachers from our platform
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  {groups.map((g) => (
                    <Grid item key={g.name} xs={4}>
                      <ProfileCard />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item>
                <ButtonGroup>
                  <Button>Prev</Button>
                  <Button>Next</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Search
