/* eslint-disable react/require-default-props */
import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import MyInput from '../../global/input'
import useStyles from './style'

type ProfileBoxPropType = {
  header: string
  text: string
  icon: React.ReactNode
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
}

const ProfileBox = ({
  header,
  icon,
  text,
  handleChange,
}: ProfileBoxPropType): React.ReactElement => {
  const classes = useStyles()

  return (
    <Grid item>
      <Paper elevation={3} className={classes.paper}>
        <Grid
          container
          direction="column"
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>{icon}</Grid>
              <Grid item>
                <Typography>{header}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>{text}</Typography>
          </Grid>
          {handleChange && (
            <Grid item>
              <input type="text" name={header} onChange={handleChange} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default ProfileBox
