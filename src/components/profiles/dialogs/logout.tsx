import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import React from 'react'

type DialogPropsType = {
  openLogout: boolean
  handleClose: () => void
}

const LogoutDialog = ({
  openLogout,
  handleClose,
}: DialogPropsType): React.ReactElement => {
  return (
    <Dialog open={openLogout} onClose={handleClose}>
      <DialogTitle>Logout</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to Log out?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No Cancel</Button>
        <Button onClick={handleClose}>Yes Logout</Button>
      </DialogActions>
    </Dialog>
  )
}

export default LogoutDialog
