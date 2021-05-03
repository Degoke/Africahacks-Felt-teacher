/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './style'

type ButtonPropsType = {
  text: string
  link: boolean
  to?: string
  type?: 'submit'
  onClick?: (e: React.MouseEvent) => void
}

const MyButton = ({
  text,
  link,
  to,
  onClick,
  type,
}: ButtonPropsType): React.ReactElement => {
  const classes = useStyles()
  return (
    <Button
      component={link ? Link : 'button'}
      variant="outlined"
      size="large"
      color="primary"
      to={to}
      onClick={onClick}
      type={type}
      className={classes.border}
    >
      {text}
    </Button>
  )
}

export default MyButton
