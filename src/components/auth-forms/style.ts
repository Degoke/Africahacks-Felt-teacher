import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(2, 4),
      backgroundColor: '#ffffff',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2, 1),
      },
    },
    box: {
      marginTop: theme.spacing(2),
      width: '55%',
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down('md')]: {
        width: '70%',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    paper: {
      padding: theme.spacing(4, 2),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4, 1),
      },
      textAlign: 'center',
    },
    border: {
      borderRadius: '25px',
    },
    centerB: {
      textAlign: 'center',
    },
    unselected: {
      boxShadow: 'inset 0px 2px 4px 1px rgba(130, 130, 131, 0.2)',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      '&$selected': {
        backgroundColor: '#5e5dba',
      },
    },
    selected: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      boxShadow: '0px 2px 4px 1px rgba(130, 130, 131, 0.2)',
    },
    list: {
      display: 'flex',
      flexDirection: 'row',
    },
    red: {
      color: theme.palette.text.secondary,
    },
  })
)
