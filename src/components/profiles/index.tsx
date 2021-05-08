/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react'
import {
  Avatar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Divider,
  Button,
} from '@material-ui/core'
import { useMutation } from 'react-query'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import RoomIcon from '@material-ui/icons/Room'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

import CameraAltIcon from '@material-ui/icons/CameraAlt'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import MyButton from '../global/button'
import useStyles from './style'
import ProfileBox from './profile-box'
import MyInput from '../global/input'
import { updateProfile } from '../../api/api'

import decodeToken, { getToken } from '../../helpers/local-storage/decode-token'

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
  const [userId, setUserId] = useState<string>('')
  const [userType, setUserType] = useState<string>('')
  // const [resume, setResume] = useState<ResumeType>()

  useEffect(() => {
    const token = getToken()
    if (token) {
      const { id, type: type2 } = decodeToken(token)
      setUserId(id)
      setUserType(type2)
    }
  }, [])

  const [data, setData] = useState({ id: userId, type: userType })

  const [isEdit, setIsEdit] = useState<boolean>(false)

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

  const { mutate, isLoading } = useMutation(updateProfile, {
    onSuccess: () => {
      setIsEdit(false)
    },
  })

  // const { mutate: upload, isLoading: upLoading } = useMutation(updateResume)

  const handleSubmit = () => {
    if (isLoading) {
      return
    }
    for (const [key, value] of Object.entries(data)) {
      if (value === '') {
        delete (data as any)[key]
      }
    }
    mutate(data)
  }

  const handleResume = () => {}

  const uploadResume = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <div>
      <div>
        <Typography>Update your profile to get verified</Typography>
      </div>
      <div className={classes.header}>
        {!profile.approved && (
          <PlayCircleFilledIcon
            className={classes.video}
            color="primary"
            fontSize="large"
          />
        )}
        {profile.approved && (
          <video className={classes.video2} width="600" height="220" controls>
            <source src={profile.video} type="video/mp4" />
          </video>
        )}

        {category === 'private' && (
          <div>
            {!isEdit && (
              <MyButton
                text="Edit"
                link={false}
                onClick={() => setIsEdit(true)}
              />
            )}
            {isEdit && (
              <MyButton text="Save" link={false} onClick={handleSubmit} />
            )}
          </div>
        )}
      </div>
      <div className={classes.root}>
        {!isEdit && (
          <Avatar
            alt="profile picture"
            src={profile.image}
            className={classes.avatar}
          />
        )}
        {isEdit && (
          <Button>
            <Avatar alt="profile picture" className={classes.avatar}>
              <CameraAltIcon />
            </Avatar>
          </Button>
        )}

        <div className={classes.deev}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      {!isEdit && (
                        <Typography variant="h5">
                          {profile.fullname ||
                            profile.nameOfSchool ||
                            profile.nameOfParent}
                        </Typography>
                      )}

                      {isEdit && (
                        <MyInput
                          name="fullname"
                          label="Name"
                          onChange={handleChange}
                        />
                      )}
                    </Grid>
                    {!isEdit && (
                      <>
                        <Grid item>
                          <FiberManualRecordIcon
                            color={profile.approved ? 'primary' : 'error'}
                            fontSize="small"
                          />
                        </Grid>
                        <Grid item>
                          <Typography>{profile.status}</Typography>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Grid>
                <Grid item>
                  {!isEdit && <Typography>{profile.about}</Typography>}

                  {isEdit && (
                    <MyInput
                      name="about"
                      label="Short Description"
                      onChange={handleChange}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
            {!isEdit && (
              <>
                <Grid item>
                  <MyButton
                    text={category === 'private' ? 'Buy Connect' : 'Connect'}
                    link={false}
                  />
                </Grid>
                <Grid item>
                  <Button>
                    <MoreHorizIcon fontSize="large" color="primary" />
                  </Button>
                </Grid>
              </>
            )}
            {isEdit && (
              <Grid item>
                <MyButton text="Add Video" link={false} />
              </Grid>
            )}
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
                  name="phone"
                  isEdit={isEdit}
                />
                <ProfileBox
                  header="Email Address"
                  text={profile.email}
                  icon={<EmailIcon fontSize="small" color="primary" />}
                  handleChange={handleChange}
                  name="email"
                  isEdit={isEdit}
                />
              </>
            )}

            <ProfileBox
              header="Location"
              text={profile.address}
              icon={<RoomIcon fontSize="small" color="primary" />}
              handleChange={handleChange}
              name="address"
              isEdit={isEdit}
            />
            {category === 'private' && !isEdit && (
              <ProfileBox
                header="Connect Points"
                text={profile.connectPoint}
                icon={
                  <FiberManualRecordIcon fontSize="small" color="primary" />
                }
                name="connect"
                isEdit={isEdit}
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
                {!isEdit && (
                  <Grid container spacing={6} className={classes.summary}>
                    {profile.subjectOrClass.map((s: string) => (
                      <Grid item key={s}>
                        <Typography>{s}</Typography>
                        <Divider orientation="vertical" flexItem />
                      </Grid>
                    ))}
                  </Grid>
                )}

                {isEdit && (
                  <label htmlFor="subjectOrClass">
                    Select your subject
                    <select name="subjectOrClass" onChange={handleChange}>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>YEARS OF EXPERIENCE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {!isEdit && <Typography>{profile.yearOfExperience}</Typography>}

                {isEdit && (
                  <MyInput
                    type="number"
                    name="yearOfExperience"
                    label="Years of Experience"
                    onChange={handleChange}
                  />
                )}
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>RESUME</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {!isEdit && <img alt="resume" src={profile.resume} />}

                {isEdit && (
                  <form
                    onSubmit={uploadResume}
                    method="POST"
                    action={`https://felt-teacher.herokuapp.com/api/teachers/${userId}/resume`}
                  >
                    <label htmlFor="resume">
                      Attach an image of your Resume
                      <br />
                      <input
                        name="resume"
                        type="file"
                        accept="image/*"
                        onChange={handleResume}
                      />
                    </label>
                    <br />
                    <MyButton type="submit" link={false} text="Add Resume" />
                  </form>
                )}
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
                {!isEdit && (
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
                )}

                {isEdit && <MyInput name="job" label="Add a job" />}
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </div>
    </div>
  )
}
export default Profiles
