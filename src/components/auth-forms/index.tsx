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
import { useMutation } from 'react-query'
import MyInput from '../global/input'
import MyButton from '../global/button'
import useStyles from './style'
import {
  getCode,
  UserAuthType,
  SignUpNameType,
  SignUpUserDataInterface,
} from '../../api/api'

export type AuthFormGroups = 'login' | 'signup'

type AuthFormPropTypes = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleNumber: (e: React.ChangeEvent<HTMLInputElement>) => void
  comparePasswords: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  formGroup: AuthFormGroups
  phone: SignUpUserDataInterface['phone']
  setId: React.Dispatch<
    React.SetStateAction<SignUpUserDataInterface['requestId']>
  >
  userGroup: UserAuthType
  handleButton: (e: React.MouseEvent<HTMLDivElement>) => void
  isSignup: boolean
  isSignupError: boolean
  isMatch: boolean
  isLoggingIn: boolean
  isLoginError: boolean
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  phoneError: string
  setPhoneError: React.Dispatch<React.SetStateAction<string>>
}

const AuthForm = ({
  handleChange,
  handleNumber,
  phone,
  comparePasswords,
  handleSubmit,
  formGroup,
  userGroup,
  setId,
  handleButton,
  isSignup,
  isSignupError,
  isMatch,
  isLoggingIn,
  isLoginError,
  handlePassword,
  phoneError,
  setPhoneError,
}: AuthFormPropTypes): React.ReactElement => {
  const classes = useStyles()

  const { mutate, isLoading, isSuccess, isError } = useMutation(getCode, {
    onSuccess: (data) => setId(data.request_id as string),
  })

  const retreiveCode = (): void => {
    if (phone !== 0) {
      mutate({ phone })
    } else {
      setPhoneError('Please enter a valid phone number...')
    }
  }

  const switchName = (): SignUpNameType => {
    switch (userGroup) {
      case 'schools':
        return 'nameOfSchool'
        break
      case 'parents':
        return 'nameOfParent'
        break
      default:
        return 'fullname'
        break
    }
  }

  const switchLabel = (): string => {
    switch (userGroup) {
      case 'schools':
        return 'School Name'
        break
      default:
        return 'Full Name'
        break
    }
  }

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
                  <Typography variant="h5">
                    {formGroup.toUpperCase()}
                  </Typography>
                </Grid>
                <Grid item>
                  <List className={classes.list}>
                    <ListItem
                      id="teachers"
                      selected={userGroup === 'teachers'}
                      classes={{
                        root: classes.unselected,
                        selected: classes.selected,
                      }}
                      button
                      onClick={handleButton}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          color: 'textPrimary',
                          variant: 'h6',
                        }}
                        className={classes.centerB}
                      >
                        Teacher
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      id="schools"
                      selected={userGroup === 'schools'}
                      classes={{
                        root: classes.unselected,
                        selected: classes.selected,
                      }}
                      button
                      onClick={handleButton}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          color: 'textPrimary',
                          variant: 'h6',
                        }}
                        className={classes.centerB}
                      >
                        School
                      </ListItemText>
                    </ListItem>
                    <ListItem
                      id="parents"
                      selected={userGroup === 'parents'}
                      classes={{
                        root: classes.unselected,
                        selected: classes.selected,
                      }}
                      button
                      onClick={handleButton}
                    >
                      <ListItemText
                        primaryTypographyProps={{
                          color: 'textPrimary',
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
                  <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      {formGroup === 'signup' && (
                        <Grid item>
                          <MyInput
                            name={switchName()}
                            label={switchLabel()}
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
                      {formGroup === 'login' && (
                        <Grid item>
                          <MyInput
                            name="password"
                            label="Password"
                            type="password"
                            onChange={handleChange}
                          />
                        </Grid>
                      )}

                      {formGroup === 'signup' && (
                        <>
                          <Grid item>
                            <MyInput
                              name="password"
                              label="Password"
                              type="password"
                              onChange={handlePassword}
                            />
                          </Grid>
                          <Grid item>
                            <MyInput
                              name="confirm"
                              label="Confirm Password"
                              type="password"
                              onChange={comparePasswords}
                            />
                            {!isMatch && (
                              <Typography>Passwords dont match...</Typography>
                            )}
                          </Grid>
                          <Grid item>
                            <MyInput
                              name="code"
                              label="Code"
                              type="number"
                              end={
                                <InputAdornment position="end">
                                  <Button onClick={retreiveCode}>
                                    <Typography>Click to get code</Typography>
                                  </Button>
                                </InputAdornment>
                              }
                              onChange={handleChange}
                            />
                            {isLoading && (
                              <Typography>Getting code...</Typography>
                            )}
                            {isSuccess && (
                              <Typography>
                                Enter the code that was sent to your phone...
                              </Typography>
                            )}
                            {isError && (
                              <Typography>
                                Error getting code try again...{' '}
                              </Typography>
                            )}
                            {phoneError && (
                              <Typography>{phoneError}</Typography>
                            )}
                          </Grid>
                        </>
                      )}

                      {formGroup === 'signup' && (
                        <Grid item className={classes.centerB}>
                          <MyButton type="submit" link={false} text="Signup" />
                          {isSignup && (
                            <Typography>
                              Please wait while we sign you up...
                            </Typography>
                          )}
                          {isSignupError && (
                            <Typography>
                              There was an error signing you up, Try again...
                            </Typography>
                          )}
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
                              />
                            </Grid>
                          </Grid>
                          {isLoggingIn && (
                            <Typography>
                              Please wait while we sign you in...
                            </Typography>
                          )}
                          {isLoginError && (
                            <Typography>
                              There was an error signing you in, Try again...
                            </Typography>
                          )}
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
                          Login
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
