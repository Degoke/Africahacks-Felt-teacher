import NavBar from '../../components/navbar/navbar'
import {
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import MyInput from '../../components/global/input'
import MyButton from '../../components/global/button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(2, 4),
    },
    box: {
      marginTop: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(4, 2),
      textAlign: 'center',
    },
    border: {
      borderRadius: '25px',
    },
    centerB: {
      textAlign: 'center',
    },
    unselected: {
      boxShadow: 'inset 0px 2px 4px 1px rgba(33, 32, 156, 0.2)',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      '&$selected': {
        backgroundColor: '#ffffff',
      },
    },
    selected: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      boxShadow: 'none',
    },
    list: {
      display: 'flex',
      flexDirection: 'row',
    },
  })
)

const SignUp: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <div>
      <NavBar page="none" />
      <Grid container className={classes.root}>
        <Grid item xs={1}>
          <Link to="/">
            <Typography>Back</Typography>
          </Link>
        </Grid>
        <Grid item xs={11}>
          <Container maxWidth="sm" className={classes.box}>
            <Paper elevation={4} className={classes.paper}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h5">Sign Up</Typography>
                </Grid>
                <Grid item>
                  <List dense className={classes.list}>
                    <ListItem
                      selected={false}
                      classes={{
                        root: classes.unselected,
                        selected: classes.selected,
                      }}
                      dense
                      button
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          color: 'secondary',
                          variant: 'h6',
                        }}
                        className={classes.centerB}
                      >
                        Teacher
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      selected={true}
                      classes={{
                        root: classes.unselected,
                        selected: classes.selected,
                      }}
                      dense
                      button
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          color: 'secondary',
                          variant: 'h6',
                        }}
                        className={classes.centerB}
                      >
                        School
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      selected={false}
                      classes={{
                        root: classes.unselected,
                        selected: classes.selected,
                      }}
                      dense
                      button
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          color: 'secondary',
                          variant: 'h6',
                        }}
                        className={classes.centerB}
                      >
                        Parent
                      </ListItemText>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <form>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <MyInput
                          pname="fullname"
                          plabel="Full Name"
                          ptype="text"
                        />
                      </Grid>
                      <Grid item>
                        <Grid container spacing={1}>
                          <Grid item>
                            <MyInput
                              pname="emailaddress"
                              plabel="Email Address"
                              ptype="email"
                            />
                          </Grid>
                          <Grid item>
                            <MyInput
                              pname="phonenumber"
                              plabel="Phone Number"
                              ptype="text"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <MyInput
                          pname="password"
                          plabel="Password"
                          ptype="password"
                        />
                      </Grid>
                      <Grid item>
                        <MyInput
                          pname="confirm"
                          plabel="Confiirm Password"
                          ptype="password"
                        />
                      </Grid>
                      <Grid item className={classes.centerB}>
                        <MyButton pto="/verify" ptext="SignUp" plink={true} />
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Typography>
                    Already Have an account?{' '}
                    <span>
                      <Link to="/login">
                        <Typography color="textSecondary" display="inline">
                          Login
                        </Typography>
                      </Link>
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUp
