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
  name: string
  isEdit: boolean
}

const ProfileBox = ({
  header,
  icon,
  text,
  handleChange,
  name,
  isEdit,
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
          {!isEdit && (
            <Grid item>
              <Typography>{text}</Typography>
            </Grid>
          )}

          {handleChange && (
            <Grid item>
              {isEdit && (
                <MyInput name={name} label={header} onChange={handleChange} />
              )}
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default ProfileBox
