import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import ShapeRight from '../../assets/images/right-background.png'
import ShapeLeft from '../../assets/images/left-background.png'
import BigYellow from '../../assets/images/small-yellow.svg'

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '85%',
      margin: 'auto',
    },
    contain: {
      backgroundImage: `url(${ShapeRight}), url(${ShapeLeft}), url(${ShapeRight}), url(${ShapeLeft})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top right, 0% 50%, 100% 60%, 0% 80%',
      backgroundSize: 'auto, auto, auto auto',
    },
    smallMargin: {
      marginTop: theme.spacing(6),
    },
    bigMargin: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(12),
    },
    image: {
      height: '100%',
      width: '100%',
    },
    buttonGroup: {
      padding: theme.spacing(3, 2),
      borderRadius: '5%',
    },
    paper: {
      padding: theme.spacing(2),
      boxShadow: 'inset 0px 2px 4px 1px rgba(33, 32, 156, 0.2)',
    },
    paperType: {
      marginTop: theme.spacing(3),
    },
    header: {
      textAlign: 'center',
    },
    contact: {
      width: '60%',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
      margin: 'auto',
    },
    border: {
      borderRadius: '25px',
    },
    pad: {
      margin: theme.spacing(1),
    },

    two: {
      backgroundImage: `url(${BigYellow}), url(${BigYellow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '10% 70%, 90% 30%',
      backgroundSize: '1.7rem 1.7rem, 1.7rem 1.7rem',
    },
    label: {
      color: '#000000',
    },
  })
)
