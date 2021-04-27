import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import MyButton from '../global/button'
import useStyles from './style'

type HomeSectionClassType = 'one' | 'three' | 'four' | 'five'

type HomeSectionPropsType = {
  backgroundClass: HomeSectionClassType
  picFirst: boolean
  heading: string
  text: string
  imageSrc: string
}

const HomeSection = ({
  backgroundClass,
  picFirst,
  heading,
  text,
  imageSrc,
}: HomeSectionPropsType): React.ReactElement => {
  const classes = useStyles()
  return (
    <div>
      <div className={`${classes[backgroundClass]} ${classes.root}`}>
        <Grid
          container
          spacing={6}
          className={classes.bigMargin}
          direction={picFirst ? 'row' : 'row-reverse'}
          justify="space-between"
        >
          <Grid item xs={12} sm={4}>
            <img
              src={imageSrc}
              alt="random illustration for aesthetics"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid
              container
              direction="column"
              spacing={10}
              className={classes.smallMargin}
            >
              <Grid item>
                <Typography variant="h3">{heading}</Typography>
                <Typography className={classes.smallMargin} color="textPrimary">
                  {text}
                </Typography>
              </Grid>
              <Grid item>
                <MyButton to="/register" text="SignUp" link />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomeSection
