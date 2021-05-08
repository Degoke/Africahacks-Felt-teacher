import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    header: {
      height: '35vh',
      backgroundColor: 'grey',
      marginBottom: theme.spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(2, 4),
    },
    root: {
      width: '85%',
      paddingLeft: theme.spacing(10),
    },
    avatar: {
      height: theme.spacing(12),
      width: theme.spacing(12),
      marginTop: '-8%',
    },
    deev: {
      marginBottom: theme.spacing(6),
    },
    paper: {
      padding: theme.spacing(2, 4),
      textAlign: 'center',
      borderRadius: '10px',
    },
    accordion: {
      padding: theme.spacing(0, 18, 0, 10),
    },
    summary: {
      padding: theme.spacing(2, 0),
    },
    video: {
      marginLeft: '50%',
      alignSelf: 'center',
    },
    video2: {
      marginLeft: '30%',
      alignSelf: 'center',
    },
  })
)
