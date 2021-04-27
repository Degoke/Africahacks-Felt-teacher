import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
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
    connect: {
      marginRight: theme.spacing(6),
    },
  })
)
