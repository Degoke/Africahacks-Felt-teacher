import { Grid, Typography } from '@material-ui/core'
import Logo from '../../assets/logo'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#E6E6E8',
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    grid: {
      margin: 'auto',
      width: '85%',
    },
  })
)

const Footer: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.grid}
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <Logo />
            </Grid>
            <Grid item>
              <Typography>Felt Teachers</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="subtitle1">
                connect with us on Social media
              </Typography>
            </Grid>
            <Grid item>
              <LinkedInIcon />
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
