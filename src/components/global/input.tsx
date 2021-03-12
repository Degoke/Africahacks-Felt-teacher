import { TextField } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    border: {
      borderRadius: '25px',
    },
    label: {
      color: '#E6E6E8',
      fontWeight: 'bold',
    },
  })
)

type IProps = {
  pname: string
  plabel: string
  pchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  ptype?: string
}

const MyInput: React.FC<IProps> = (props: IProps): React.ReactElement => {
  const classes = useStyles()
  return (
    <TextField
      name={props.pname}
      id={props.pname}
      label={props.plabel}
      type={props.ptype}
      onChange={props.pchange}
      variant="outlined"
      fullWidth={true}
      size="small"
      required={true}
      color="secondary"
      InputProps={{
        className: classes.border,
      }}
      InputLabelProps={{
        className: classes.label,
      }}
    />
  )
}

export default MyInput
