import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: '#5E5DBA',
      padding: theme.spacing(2, 4),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    root: {
      width: '90%',
      margin: 'auto',
    },
    pad: {
      padding: theme.spacing(1, 2),
    },
  })
)
