import { Menu, MenuItem } from '@material-ui/core'
import React from 'react'

type ProfileMenuProps = {
  anchorEl: null | SVGSVGElement
  handleClose: () => void
}

const ProfileMenu = ({
  anchorEl,
  handleClose,
}: ProfileMenuProps): React.ReactElement => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      keepMounted
      disableScrollLock
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem>Logout</MenuItem>
      <MenuItem>Delete Account</MenuItem>
    </Menu>
  )
}

export default ProfileMenu
