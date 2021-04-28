import React from 'react'
import {
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import MyInput from '../global/input'
import MyButton from '../global/button'
import useStyles from './style'
import { useGetCode } from '../../hooks/api'

type AuthFormGroups = 'login' | 'signup'

type AuthFormPropTypes = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleNumber: (e: React.ChangeEvent<HTMLInputElement>) => void
  comparePasswords: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  formGroup: AuthFormGroups
  phone: number
  setId: React.SetStateAction<React.Dispatch<string>>
}

const AuthForm = ({
  handleChange,
  handleNumber,
  phone,
  comparePasswords,
  handleSubmit,
  formGroup,
  setId,
}: AuthFormPropTypes): React.ReactElement => {
  const classes = useStyles()

  const { mutate } = useGetCode()
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item sm={12} md={1}>
          <Link to="/">
            <Typography>Back</Typography>
          </Link>
        </Grid>
        <Grid item sm={12} md={11}>
          <Container className={classes.box}>
            <Paper elevation={4} className={classes.paper}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h5">Sign Up</Typography>
                </Grid>
                <Grid item>
                  <List className={classes.list}>
                    <ListItem
                      selected={false}
                      classes={{
                        root: classes.unselected,
                        selected: classes.selected,
                      }}
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
                      selected
                      classes={{
                        root: classes.unselected,
                        selected: classes.selected,
                      }}
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
                      {formGroup === 'signup' && (
                        <Grid item>
                          <MyInput
                            name="fullname"
                            label="Full Name"
                            type="text"
                            onChange={handleChange}
                          />
                        </Grid>
                      )}

                      <Grid item>
                        <MyInput
                          name="email"
                          label="Email Address"
                          type="email"
                          onChange={handleChange}
                        />
                      </Grid>
                      {formGroup === 'signup' && (
                        <Grid item>
                          <MyInput
                            name="phone"
                            label="Phone Number"
                            type="number"
                            start={
                              <InputAdornment position="start">
                                +234
                              </InputAdornment>
                            }
                            onChange={handleNumber}
                          />
                        </Grid>
                      )}

                      <Grid item>
                        <MyInput
                          name="password"
                          label="Password"
                          type="password"
                          onChange={handleChange}
                        />
                      </Grid>
                      {formGroup === 'signup' && (
                        <>
                          <Grid item>
                            <MyInput
                              name="confirm"
                              label="Confiirm Password"
                              type="password"
                              onChange={comparePasswords}
                            />
                          </Grid>
                          <Grid item>
                            <MyInput
                              name="code"
                              label="Code"
                              type="number"
                              end={
                                <InputAdornment position="end">
                                  <Button onClick={() => mutate({ phone })}>
                                    <Typography>Click to get code</Typography>
                                  </Button>
                                </InputAdornment>
                              }
                              onChange={handleChange}
                            />
                          </Grid>
                        </>
                      )}

                      {formGroup === 'signup' && (
                        <Grid item className={classes.centerB}>
                          <MyButton
                            type="submit"
                            link={false}
                            text="Signup"
                            onClick={handleSubmit}
                          />
                        </Grid>
                      )}
                      {formGroup === 'login' && (
                        <Grid item>
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                          >
                            <Grid item>
                              <Typography color="textSecondary">
                                Forgot Password?
                              </Typography>
                            </Grid>
                            <Grid item>
                              <MyButton
                                type="submit"
                                link={false}
                                text="Login"
                                onClick={handleSubmit}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      )}
                    </Grid>
                  </form>
                </Grid>
                {formGroup === 'signup' && (
                  <Grid item>
                    <Typography>
                      Already Have an account?{' '}
                      <span>
                        <Link to="/login" className={classes.red}>
                          Signup
                        </Link>
                      </span>
                    </Typography>
                  </Grid>
                )}
                {formGroup === 'login' && (
                  <Grid item>
                    <Typography>
                      Already Have an account?{' '}
                      <span>
                        <Link to="/register" className={classes.red}>
                          Signup
                        </Link>
                      </span>
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default AuthForm
