import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 6),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 2),
      },
      backgroundColor: '#ffffff',
    },
    avatar: {
      height: theme.spacing(4),
      width: theme.spacing(4),
    },
  })
)
