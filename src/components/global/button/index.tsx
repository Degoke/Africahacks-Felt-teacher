/* eslint-disable react/require-default-props */
import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

type ButtonPropsType = {
  text: string
  link: boolean
  to?: string
  type?: 'submit'
  onClick?: (e: React.MouseEvent) => void
}

const MuiButton = ({
  text,
  link,
  to,
  onClick,
  type,
}: ButtonPropsType): React.ReactElement => {
  return (
    <Button
      component={link ? Link : Button}
      variant="outlined"
      size="large"
      color="primary"
      to={to}
      onClick={onClick}
      type={type}
    >
      {text}
    </Button>
  )
}

export default MuiButton
