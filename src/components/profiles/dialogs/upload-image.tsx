import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import React from 'react'

type DialogPropsType = {
  openImage: boolean
  handleClose: () => void
}

const UploadImage = ({
  openImage,
  handleClose,
}: DialogPropsType): React.ReactElement => {
  return (
    <Dialog open={openImage} onClose={handleClose}>
      <DialogTitle>Add your profile image</DialogTitle>
      <DialogContent>
        <label htmlFor="image">
          <input type="file" name="image" accept="image/*" />
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UploadImage
