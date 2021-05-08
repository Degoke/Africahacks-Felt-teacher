import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import React from 'react'

type DialogPropsType = {
  openVideo: boolean
  handleClose: () => void
}

const UploadVideo = ({
  openVideo,
  handleClose,
}: DialogPropsType): React.ReactElement => {
  return (
    <Dialog open={openVideo} onClose={handleClose}>
      <DialogTitle>Add your profile image</DialogTitle>
      <DialogContent>
        <label htmlFor="image">
          <input type="file" name="video" accept="video/*" />
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UploadVideo
