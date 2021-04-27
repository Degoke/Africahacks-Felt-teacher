import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Logo from '../../assets/logo'
import useStyles from './style'

const Footer = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.grid}
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <Logo />
            </Grid>
            <Grid item>
              <Typography>Felt Teachers</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="subtitle1" className={classes.connect}>
                connect with us on Social media
              </Typography>
            </Grid>
            <Grid item>
              <LinkedInIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
              <FacebookIcon fontSize="large" />
              <TwitterIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
