import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#EEEEEE',
      width: '100%',
    },
    paper: {
      padding: theme.spacing(2, 1),
      textAlign: 'center',
    },
  })
)
