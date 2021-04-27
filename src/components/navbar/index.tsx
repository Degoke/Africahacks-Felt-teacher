import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Avatar,
  Hidden,
  Menu,
  MenuItem,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import MyButton from '../global/button/style'
import Logo from '../../assets/logo'
import useStyles from './style'

type Tcomponent = 'home' | 'none' | 'profile'

type PropsType = {
  page: Tcomponent
}

const NavBar = ({ page }: PropsType): React.ReactElement => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null)

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
          <Hidden smDown>
            {page === 'home' && (
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
                      FAQ&apos;S
                    </Button>
                  </Grid>
                  <Grid item>
                    <MyButton to="/login" text="Login" link />
                  </Grid>
                </Grid>
              </Grid>
            )}
            {page === 'profile' && (
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
                    <Avatar data-testid="profile-avatar" alt="profile picture">
                      AA
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Hidden>
          <Hidden mdUp>
            {(page === 'home' || page === 'none') && (
              <Grid item>
                <MenuIcon
                  fontSize="large"
                  color="primary"
                  onClick={handleClick}
                  data-testid="menu-icon"
                />
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  keepMounted
                  disableScrollLock
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem component={Link} to="/" onClick={handleClose}>
                    Home
                  </MenuItem>
                  <MenuItem component={Link} to="/" onClick={handleClose}>
                    About Us
                  </MenuItem>
                  <MenuItem component={Link} to="/faqs" onClick={handleClose}>
                    FAQ&apos;S
                  </MenuItem>
                  <MenuItem component={Link} to="/login" onClick={handleClose}>
                    Login
                  </MenuItem>
                </Menu>
              </Grid>
            )}
            {page === 'profile' && (
              <Grid item>
                <MenuIcon
                  fontSize="large"
                  color="primary"
                  onClick={handleClick}
                  data-testid="menu-icon"
                />
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  keepMounted
                  disableScrollLock
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem component={Link} to="/" onClick={handleClose}>
                    Home
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/teachers"
                    onClick={handleClose}
                  >
                    Teachers
                  </MenuItem>
                  <MenuItem component={Link} to="/faqs" onClick={handleClose}>
                    Help
                  </MenuItem>
                  <MenuItem component={Link} to="/" onClick={handleClose}>
                    <Avatar data-testid="profile-avatar" alt="profile picture">
                      AA
                    </Avatar>
                  </MenuItem>
                </Menu>
              </Grid>
            )}
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
