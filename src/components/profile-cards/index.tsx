/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Avatar,
} from '@material-ui/core'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import useStyles from './style'
import { getTeachers } from '../../api/api'

type ProfileCardPropsType = {
  current: string
}

const ProfileCard = ({ current }: ProfileCardPropsType): React.ReactElement => {
  const history = useHistory()
  const { data: teachers, isFetching, isError, isSuccess } = useQuery(
    [current, current],
    () => getTeachers(current)
  )

  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      {isSuccess && (
        <>
          {teachers.data.map((teacher: any) => (
            <Grid item key={teacher._id} xs={2}>
              <Card raised>
                <CardActionArea>
                  <CardMedia
                    component={Avatar}
                    className={classes.image}
                    alt="Profile Image"
                    src="/images/male-student.svg"
                  />
                  <CardContent>
                    <Typography variant="subtitle1">
                      {teacher.fullname}
                    </Typography>
                    <Typography variant="caption">{teacher.about}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    fullWidth
                    onClick={() =>
                      history.push(`/profile/teacher/${teacher._id}`)
                    }
                  >
                    Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </>
      )}
      {isError && <Typography>Something went wrong</Typography>}
      {isFetching && <Typography>Loading...</Typography>}
    </Grid>
  )
}

export default ProfileCard
