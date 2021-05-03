import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2, 4),
      textAlign: 'center',
      borderRadius: '10px',
    },
  })
)
