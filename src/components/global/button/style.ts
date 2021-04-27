import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    border: {
      borderRadius: '12px',
      boxShadow: '0px 2px 8px rgba(33, 32, 156, 0.1)',
      paddingRight: theme.spacing(6),
      paddingLeft: theme.spacing(6),
    },
  })
)
