import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '90%',
      margin: 'auto',
      marginTop: theme.spacing(4),
    },
    pad: {
      padding: theme.spacing(1, 2),
    },
  })
)
