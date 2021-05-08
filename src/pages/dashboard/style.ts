import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '95%',
      margin: '5% auto',
    },
    paper: {
      padding: theme.spacing(2),
    },
    divider: {
      margin: theme.spacing(1, 0),
    },
  })
)
