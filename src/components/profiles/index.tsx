import React from 'react'
import {
  Avatar,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Divider,
} from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import RoomIcon from '@material-ui/icons/Room'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MyButton from '../global/button'
import useStyles from './style'

const Profiles = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.header} />
      <div className={classes.root}>
        <Avatar alt="profile picture" className={classes.avatar}>
          AA
        </Avatar>
        <div className={classes.deev}>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Typography variant="h5">data?.fullname</Typography>
                    </Grid>
                    <Grid item>
                      <FiberManualRecordIcon color="error" fontSize="small" />
                    </Grid>
                    <Grid item>
                      <Typography>data?.status</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography>data?.about</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <MyButton to="/" text="connect" link />
            </Grid>
          </Grid>
        </div>
        <div className={classes.deev}>
          <Grid container spacing={6}>
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
                      <Grid item>
                        <CallIcon fontSize="small" />
                      </Grid>
                      <Grid item>
                        <Typography>Phone Number</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography>data?.phone</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
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
                      <Grid item>
                        <EmailIcon fontSize="small" />
                      </Grid>
                      <Grid item>
                        <Typography>Email Address</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography>data?.email</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
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
                      <Grid item>
                        <RoomIcon fontSize="small" />
                      </Grid>
                      <Grid item>
                        <Typography>Address</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography>data?.address</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.deev}>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>EDUCATIONAL BACKGROUND</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={6} className={classes.summary}>
              <Grid item>
                <Typography>SSCE</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <Typography>2001-2007</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <Typography>Some School</Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Work Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={6} className={classes.summary}>
              <Grid item>
                <Typography>SSCE</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <Typography>2001-2007</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <Typography>Some School</Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>cv</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={6} className={classes.summary}>
              <Grid item>
                <Typography>SSCE</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <Typography>2001-2007</Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <Typography>Some School</Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default Profiles
