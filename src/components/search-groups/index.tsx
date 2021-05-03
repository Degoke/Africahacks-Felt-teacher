import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

type SearchGroupsPropsType = {
  handleSubject: (e: React.MouseEvent<HTMLDivElement>) => void
}

const subjects: string[] = [
  'English',
  'Mathematics',
  'Biology',
  'Commerce',
  'Government',
  'EnglishLiterature',
  'History',
  'CivicEducation',
  'IslamicReligiousStudies',
  'Physics',
  'Geography',
  'Economics',
  'Account',
  'Chemistry',
]

const SearchGroups = ({
  handleSubject,
}: SearchGroupsPropsType): React.ReactElement => {
  const classes = useStyles()
  return (
    <Grid container spacing={6} className={classes.root}>
      {subjects.sort().map((g) => (
        <Grid
          item
          key={g}
          xs={6}
          id={g}
          onClick={handleSubject}
          className={classes.paper}
        >
          <Paper>
            <Typography>{g}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default SearchGroups
