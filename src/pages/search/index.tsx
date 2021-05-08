import React, { useState, useEffect } from 'react'
import {
  Button,
  ButtonGroup,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core'
import { useQuery } from 'react-query'
import NavBar from '../../components/navbar'
import useStyles from './style'
import ProfileCard from '../../components/profile-cards'
import MyInput from '../../components/global/input'
import SearchGroups from '../../components/search-groups'
import { getTeachers } from '../../api/api'

const categories: string[] = ['Subjects', 'JuniorSecodary', 'Primary']

const Search = (): React.ReactElement => {
  const [category, setCategory] = useState<string>('')
  const [subject, setSubject] = useState<string>('All')
  const [current, setCurrent] = useState<string>('')

  useEffect(() => {
    if (subject !== 'None' && subject !== 'All') {
      setCurrent(subject)
      return
    }
    setCurrent(category)
  }, [subject, category])

  const classes = useStyles()

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { id } = e.currentTarget
    if (id === 'Subjects') {
      setSubject('All')
      return
    }
    setSubject('None')
    setCategory(id)
  }

  const handleSubject = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { id } = e.currentTarget
    setSubject(id)
  }

  return (
    <div>
      <NavBar page="profile" />
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <Paper elevation={3}>
              <List dense>
                {categories.map((c) => (
                  <ListItem
                    key={c}
                    id={c}
                    button
                    dense
                    divider
                    onClick={handleClick}
                  >
                    <ListItemText primary={c} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={3}>
              <Grid item>
                <MyInput type="search" name="search" label="Search" />
              </Grid>
              <Grid item>
                <Typography>
                  We offer Experienced and qualified teachers who are capable of
                  Inculcating and building your children and preparing them for
                  being tomorrow’s leaders. Below are the list of approved
                  teachers from our platform
                </Typography>
              </Grid>

              {subject === 'All' && (
                <Grid item className={classes.wide}>
                  <SearchGroups handleSubject={handleSubject} />
                </Grid>
              )}
              {subject !== 'All' && (
                <>
                  <Grid item className={classes.wide}>
                    <ProfileCard current={current} />
                  </Grid>
                  <Grid item>
                    <ButtonGroup>
                      <Button>Prev</Button>
                      <Button>Next</Button>
                    </ButtonGroup>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Search
