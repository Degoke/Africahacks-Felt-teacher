import { Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    border: {
      borderRadius: '12px',
      boxShadow: '0px 2px 8px rgba(33, 32, 156, 0.1)',
      paddingRight: theme.spacing(6),
      paddingLeft: theme.spacing(6),
    },
  })
)

type IProps = {
  ptext: string
  pto?: string
  plink: boolean
  pclick?: (e: React.MouseEvent) => void
}

const MyButton: React.FC<IProps> = (props: IProps): React.ReactElement => {
  const classes = useStyles()
  return (
    <Button
      component={props.plink ? Link : Button}
      variant="outlined"
      size="large"
      color="primary"
      className={classes.border}
      to={props.pto}
      onClick={props.pclick}
    >
      {props.ptext}
    </Button>
  )
}

export default MyButton
