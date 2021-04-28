import React from 'react'
import { Paper, Typography, Grid, TextField } from '@material-ui/core'
import HomeSection from '../../components/home-section'
import Navbar from '../../components/navbar'
import MyButton from '../../components/global/button'
import MyInput from '../../components/global/input'
import Footer from '../../components/footer'
import useStyles from './style'

const Home = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.contain}>
        <Navbar page="home" />
        <div className={classes.smallMargin}>
          <HomeSection
            backgroundClass="one"
            picFirst={false}
            heading="Get Access To the best teachers in town"
            text="Making Refined and Qualified Teachers to all Schools in
                    Nigeria is our priority. Our platform creates a link between
                    teachers and schools by providing a medium to vet teachers,
                    and act as a means of communication between both parties."
            imageSrc="/images/teacher.svg"
          />
          <div className={classes.two}>
            <Grid
              container
              spacing={10}
              justify="center"
              className={classes.bigMargin}
            >
              <Grid item sm="auto" className={classes.pad}>
                <Paper elevation={3} className={classes.buttonGroup}>
                  <Grid container spacing={3} justify="center">
                    <Grid item>
                      <Paper variant="outlined" className={classes.paper}>
                        <Typography variant="h2">0</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper variant="outlined" className={classes.paper}>
                        <Typography variant="h2">0</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper variant="outlined" className={classes.paper}>
                        <Typography variant="h2">0</Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
                <Typography variant="h4" className={classes.paperType}>
                  Registered Schoools
                </Typography>
              </Grid>
              <Grid item sm="auto" className={classes.pad}>
                <Paper elevation={3} className={classes.buttonGroup}>
                  <Grid container spacing={3} justify="center">
                    <Grid item>
                      <Paper variant="outlined" className={classes.paper}>
                        <Typography variant="h2">0</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper variant="outlined" className={classes.paper}>
                        <Typography variant="h2">0</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper variant="outlined" className={classes.paper}>
                        <Typography variant="h2">0</Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
                <Typography variant="h4" className={classes.paperType}>
                  Qualified Teachers
                </Typography>
              </Grid>
            </Grid>
          </div>
          <HomeSection
            backgroundClass="three"
            picFirst
            heading="Who we are"
            text="We are dedicated to providing quality education to students
                    in line with the SDG goal - We accept applications from, and
                    examine teachers to ensure that quality would be provided
                    while teaching."
            imageSrc="/images/male-student.svg"
          />
          <HomeSection
            backgroundClass="four"
            picFirst={false}
            heading="Get the app"
            text=" Our mobile Application makes accessing our services even
                    easier. Get access to the best quality of teachers via a tap
                    from your mobile phone."
            imageSrc="/images/phones.svg"
          />
          <HomeSection
            backgroundClass="five"
            picFirst
            heading="Have Questions?"
            text="We have compiled a list of the questions that have been
                    answered."
            imageSrc="/images/female-student.svg"
          />
        </div>

        <div className={classes.two}>
          <div className={classes.contact}>
            <Typography variant="h3" className={classes.header}>
              Contact Us
            </Typography>
            <Grid
              container
              direction="column"
              spacing={3}
              justify="center"
              className={classes.bigMargin}
            >
              <Grid item>
                <MyInput
                  name="emailaddress"
                  label="Email Address"
                  type="email"
                />
              </Grid>
              <Grid item>
                <TextField
                  name="message"
                  label="Message"
                  type="text"
                  multiline
                  rows={4}
                  variant="outlined"
                  size="medium"
                  fullWidth
                  InputProps={{
                    className: classes.border,
                  }}
                  color="secondary"
                />
              </Grid>
              <Grid item className={classes.header}>
                <MyButton to="/register" text="SignUp" link />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
