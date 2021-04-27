/* eslint-disable react/require-default-props */
import React from 'react'
import { TextField } from '@material-ui/core'

type InputpropsType = {
  name: string
  label: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  start?: React.ReactElement
  end?: React.ReactElement
  ref?: React.RefObject<HTMLInputElement>
}

const MuiInput = ({
  name,
  label,
  onChange,
  type,
  start,
  end,
  ref,
}: InputpropsType): React.ReactElement => {
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
        className: 'border',
        startAdornment: start,
        endAdornment: end,
      }}
      InputLabelProps={{
        className: 'label',
      }}
    />
  )
}

export default MuiInput
