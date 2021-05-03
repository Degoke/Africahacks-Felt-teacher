import React from 'react'
import {
  Avatar,
  Typography,
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
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import MyButton from '../global/button'
import useStyles from './style'
import ProfileBox from './profile-box'

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
  return (
    <div>
      <div>
        <Typography>Update your profile to get verified</Typography>
      </div>
      <div className={classes.header}>
        <PlayCircleFilledIcon color="primary" fontSize="large" />
        {category === 'private' && <MyButton text="Edit" link={false} />}
      </div>
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
                      <Typography variant="h5">
                        {profile.fullname ||
                          profile.nameOfSchool ||
                          profile.nameOfParent}
                      </Typography>
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
                  <Typography>{profile.about}</Typography>
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
                />
                <ProfileBox
                  header="Email Address"
                  text={profile.email}
                  icon={<EmailIcon fontSize="small" color="primary" />}
                />
              </>
            )}

            <ProfileBox
              header="Location"
              text={profile.country}
              icon={<RoomIcon fontSize="small" color="primary" />}
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
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>YEARS OF EXPERIENCE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{profile.yearOfExperience}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>RESUME</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{profile.resume}</Typography>
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
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>REQUIREMENTS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{profile.requirements}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </div>
    </div>
  )
}
export default Profiles
