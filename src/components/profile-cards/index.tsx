import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'

const ProfileCard = (): React.ReactElement => {
  return (
    <div>
      <Card raised>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Profile Image"
            height="60"
            image="/images/male-student.svg"
          />
          <CardContent>
            <Typography>name</Typography>
            <Typography>text</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button>Profile</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ProfileCard
