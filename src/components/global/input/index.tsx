/* eslint-disable react/require-default-props */
import React from 'react'
import { TextField } from '@material-ui/core'
import useStyles from './style'

type InputpropsType = {
  name: string
  label: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  start?: React.ReactElement
  end?: React.ReactElement
  ref?: React.RefObject<HTMLInputElement>
}

const MyInput = ({
  name,
  label,
  onChange,
  type,
  start,
  end,
  ref,
}: InputpropsType): React.ReactElement => {
  const classes = useStyles()
  return (
    <TextField
      name={name}
      id={name}
      label={label}
      type={type}
      onChange={onChange}
      variant="outlined"
      fullWidth
      size="small"
      required
      color="secondary"
      ref={ref}
      InputProps={{
        className: classes.border,
        startAdornment: start,
        endAdornment: end,
      }}
      InputLabelProps={{
        className: classes.label,
      }}
    />
  )
}

export default MyInput
