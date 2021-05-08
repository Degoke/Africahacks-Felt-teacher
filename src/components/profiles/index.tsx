/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useContext } from 'react'
import {
  Avatar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Divider,
} from '@material-ui/core'
import { useMutation } from 'react-query'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import RoomIcon from '@material-ui/icons/Room'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import EditIcon from '@material-ui/icons/Edit'
import CameraAltIcon from '@material-ui/icons/CameraAlt'
import MyButton from '../global/button'
import useStyles from './style'
import ProfileBox from './profile-box'
import MyInput from '../global/input'
import { updateProfile } from '../../api/api'
import { UserContext } from '../../helpers/context/user'

const subjects: string[] = [
  'Junior Secondary Class',
  'Primary Class',
  'Economics',
  'Account',
  'Chemistry',
  'Geography',
  'Physics',
  'Christian Religious Studies',
  'Islamic Religious Studies',
  'Civic Education',
  'History',
  'Government',
  'Commerce',
  'Biology',
  'English',
  'Mathematics',
  'English Literature',
]

type ProfileTypeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  profile: any
  type: string
  category: string
}

const Profiles = ({
  profile,
  type,
  category,
}: ProfileTypeProps): React.ReactElement => {
  const classes = useStyles()
  const { userId, userType } = useContext(UserContext)

  const [data, setData] = useState({ id: userId, type: userType })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData((prev) => {
      return {
        ...prev,
        id: userId,
        type: userType,
        [e.target.name]: e.target.value,
      }
    })
  }

  const { mutate, isLoading, isError } = useMutation(updateProfile, {
    onSuccess: (result) => {
      console.log(result)
    },
    onError: (err) => {
      console.log(err)
    },
  })

  const handleSubmit = () => {
    mutate(data)
  }
  return (
    <div>
      <div>
        <Typography>Update your profile to get verified</Typography>
      </div>
      <div className={classes.header}>
        <video width="320" height="240" controls>
          <source src={profile.video} type="video/mp4" />
        </video>
        <PlayCircleFilledIcon color="primary" fontSize="large" />
        {category === 'private' && (
          <>
            <MyButton text="Edit" link={false} />
            <MyButton text="Save" link={false} onClick={handleSubmit} />
          </>
        )}
      </div>
      <div className={classes.root}>
        <Avatar
          alt="profile picture"
          src={profile.image}
          className={classes.avatar}
        />
        <div className={classes.deev}>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <EditIcon />
                      <Typography variant="h5">
                        {profile.fullname ||
                          profile.nameOfSchool ||
                          profile.nameOfParent}
                      </Typography>
                      <input
                        type="text"
                        name="fullname"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item>
                      <FiberManualRecordIcon
                        color={profile.approved ? 'primary' : 'error'}
                        fontSize="small"
                      />
                    </Grid>
                    <Grid item>
                      <Typography>{profile.status}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <EditIcon />
                  <Typography>{profile.about}</Typography>
                  <input type="text" name="about" onChange={handleChange} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <MyButton
                text={category === 'private' ? 'Buy Connect' : 'Connect'}
                link={false}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.deev}>
          <Grid container spacing={4}>
            {category === 'private' && (
              <>
                <ProfileBox
                  header="Phone Number"
                  text={profile.phone}
                  icon={<CallIcon fontSize="small" color="primary" />}
                  handleChange={handleChange}
                />
                <ProfileBox
                  header="Email Address"
                  text={profile.email}
                  icon={<EmailIcon fontSize="small" color="primary" />}
                  handleChange={handleChange}
                />
              </>
            )}

            <ProfileBox
              header="Location"
              text={profile.country}
              icon={<RoomIcon fontSize="small" color="primary" />}
              handleChange={handleChange}
            />
            {category === 'private' && (
              <ProfileBox
                header="Connect Points"
                text={profile.connectPoint}
                icon={
                  <FiberManualRecordIcon fontSize="small" color="primary" />
                }
              />
            )}
          </Grid>
        </div>
      </div>
      <div className={classes.deev}>
        {type === 'teacher' && (
          <>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>SUBJECTS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={6} className={classes.summary}>
                  {profile.subjectOrClass.map((s: string) => (
                    <Grid item key={s}>
                      <Typography>{s}</Typography>
                      <Divider orientation="vertical" flexItem />
                    </Grid>
                  ))}
                  <label htmlFor="subjectOrClass">
                    Select your subjects
                    <select
                      multiple
                      name="subjectOrClass"
                      onChange={handleChange}
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>YEARS OF EXPERIENCE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{profile.yearOfExperience}</Typography>
                <input
                  type="text"
                  name="yearOfExperience"
                  onChange={handleChange}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>RESUME</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <img alt="resume" src={profile.resume} />
                <input name="resume" type="file" />
              </AccordionDetails>
            </Accordion>
          </>
        )}
        {type !== 'teacher' && (
          <>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>JOBS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  spacing={2}
                  direction="column"
                  className={classes.summary}
                >
                  {profile.jobs.map((s: string) => (
                    <Grid item key={s}>
                      <Typography>{s}</Typography>
                      <Divider orientation="horizontal" flexItem />
                    </Grid>
                  ))}
                </Grid>
                <MyInput name="job" label="Add a job" />
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </div>
    </div>
  )
}
export default Profiles
