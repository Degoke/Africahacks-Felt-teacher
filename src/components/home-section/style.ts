import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import BigGrey from '../../assets/images/small-grey.svg'
import BigYellow from '../../assets/images/small-yellow.svg'

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '85%',
      margin: 'auto',
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
    one: {
      backgroundImage: `url(${BigGrey}), url(${BigYellow}), url(${BigGrey}), url(${BigYellow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '70% 75%, 76% 60%, 50% 3%, 45% 10%',
      backgroundSize: '8rem 8rem, 1.7rem 1.7rem, 5rem 5rem, 1rem 1rem',
    },
    two: {
      backgroundImage: `url(${BigYellow}), url(${BigYellow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '10% 70%, 90% 30%',
      backgroundSize: '1.7rem 1.7rem, 1.7rem 1.7rem',
    },
    three: {
      backgroundImage: `url(${BigGrey}), url(${BigYellow}), url(${BigGrey}), url(${BigYellow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '70% 75%, 76% 60%, 50% 3%, 45% 10%',
      backgroundSize: '8rem 8rem, 1.7rem 1.7rem, 5rem 5rem, 1rem 1rem',
    },
    four: {
      backgroundImage: `url(${BigGrey}), url(${BigYellow}), url(${BigGrey}), url(${BigYellow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '70% 75%, 76% 60%, 50% 3%, 45% 10%',
      backgroundSize: '8rem 8rem, 1.7rem 1.7rem, 5rem 5rem, 1rem 1rem',
    },
    five: {
      backgroundImage: `url(${BigGrey}), url(${BigYellow}), url(${BigGrey}), url(${BigYellow})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '70% 75%, 76% 60%, 50% 3%, 45% 10%',
      backgroundSize: '8rem 8rem, 1.7rem 1.7rem, 5rem 5rem, 1rem 1rem',
    },
  })
)
