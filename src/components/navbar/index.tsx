import React, { useState, useEffect } from 'react'
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
import MyButton from '../global/button'
import Logo from '../../assets/logo'
import useStyles from './style'
import decodeToken, {
  getToken,
  getImage,
} from '../../helpers/local-storage/decode-token'

type Tcomponent = 'home' | 'none' | 'profile'

type PropsType = {
  page: Tcomponent
}

const NavBar = ({ page }: PropsType): React.ReactElement => {
  const classes = useStyles()

  const [userId, setUserId] = useState<string>('')
  const [userType, setUserType] = useState<string>('')
  const [userImage, setUserImage] = useState<string>('')

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const token = getToken()
    const image = getImage()
    if (token) {
      const { id, type } = decodeToken(token)
      setUserId(id)
      setUserType(type)
    }
    if (image) {
      setUserImage(image)
    }
  }, [])

  useEffect(() => {
    if (userId) {
      setIsLoggedIn(true)
    }
  }, [userId])

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
            <Button component={Link} to="/">
              <Grid container alignItems="center">
                <Grid item>
                  <Logo />
                </Grid>
                <Grid item>
                  <Typography color="primary">Felt Teachers</Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
          <Hidden smDown>
            {page === 'home' && (
              <Grid item>
                <Grid container spacing={4} alignItems="center">
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
                  {isLoggedIn && (
                    <Grid item>
                      <Button
                        component={Link}
                        to={`/profile/${userType}/${userId}`}
                      >
                        <Avatar
                          data-testid="profile-avatar"
                          alt="profile picture"
                          src={userImage}
                        >
                          AA
                        </Avatar>
                      </Button>
                    </Grid>
                  )}
                  {!isLoggedIn && (
                    <Grid item>
                      <MyButton to="/login" text="Login" link />
                    </Grid>
                  )}
                </Grid>
              </Grid>
            )}
            {page === 'profile' && (
              <Grid item>
                <Grid container spacing={4} alignItems="center">
                  <Grid item>
                    <Button component={Link} to="/dashboard" color="primary">
                      Dashboard
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={Link} to="/all" color="primary">
                      Teachers
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={Link} to="/faqs" color="primary">
                      Help
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      to={`/profile/${userType}/${userId}`}
                    >
                      <Avatar
                        data-testid="profile-avatar"
                        alt="profile picture"
                        src={userImage}
                      >
                        AA
                      </Avatar>
                    </Button>
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
                  {isLoggedIn && (
                    <MenuItem
                      component={Link}
                      to={`/profile/${userType}/${userId}`}
                      onClick={handleClose}
                    >
                      <Avatar
                        data-testid="profile-avatar"
                        alt="profile picture"
                        src={userImage}
                      >
                        AA
                      </Avatar>
                    </MenuItem>
                  )}
                  {!isLoggedIn && (
                    <MenuItem
                      component={Link}
                      to="/login"
                      onClick={handleClose}
                    >
                      Login
                    </MenuItem>
                  )}
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
                  <MenuItem
                    component={Link}
                    to="/dashboard"
                    onClick={handleClose}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/all"
                    onClick={handleClose}
                  >
                    Teachers
                  </MenuItem>
                  <MenuItem component={Link} to="/faqs" onClick={handleClose}>
                    Help
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to={`/profile/${userType}/${userId}`}
                    onClick={handleClose}
                  >
                    <Avatar
                      data-testid="profile-avatar"
                      alt="profile picture"
                      src={userImage}
                    >
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
