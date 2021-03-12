/* eslint-disable react/no-unescaped-entities */
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Avatar,
} from '@material-ui/core'
import Logo from '../../assets/logo'
import { Link } from 'react-router-dom'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import MyButton from '../global/button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 6),
      backgroundColor: '#ffffff',
    },
    avatar: {
      height: theme.spacing(4),
      width: theme.spacing(4),
    },
  })
)

type Tcomponent = 'home' | 'none' | 'profile'

type Pprops = {
  page: Tcomponent
}

const NavBar: React.FC<Pprops> = (props: Pprops) => {
  const classes = useStyles()
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
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
          {props.page === 'home' ? (
            <Grid item>
              <Grid container spacing={4}>
                <Grid item>
                  <Button component={Link} to="/" color="primary">
                    Home
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to="/" color="primary">
                    About Us
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to="/faqs" color="primary">
                    FAQ'S
                  </Button>
                </Grid>
                <Grid item>
                  <MyButton pto="/login" ptext="Login" plink={true} />
                </Grid>
              </Grid>
            </Grid>
          ) : props.page === 'profile' ? (
            <Grid item>
              <Grid container spacing={4}>
                <Grid item>
                  <Button component={Link} to="/" color="primary">
                    Home
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to="/teachers" color="primary">
                    Teachers
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to="/" color="primary">
                    Help
                  </Button>
                </Grid>
                <Grid item>
                  <Avatar alt="profile picture">AA</Avatar>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
