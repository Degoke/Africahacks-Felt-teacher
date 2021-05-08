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
  openDelete: boolean
  handleClose: () => void
}

const DeleteAccountDialog = ({
  openDelete,
  handleClose,
}: DialogPropsType): React.ReactElement => {
  return (
    <Dialog open={openDelete} onClose={handleClose}>
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

export default DeleteAccountDialog
