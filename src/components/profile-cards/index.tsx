import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core'
import useStyles from './style'

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

const ProfileCard = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      {groups.map((g) => (
        <Grid item key={g.name} xs={2}>
          <Card raised>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Profile Image"
                image="/images/male-student.svg"
                height="90px"
                className={classes.image}
              />
              <CardContent>
                <Typography>name</Typography>
                <Typography>text</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button fullWidth>Profile</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ProfileCard
