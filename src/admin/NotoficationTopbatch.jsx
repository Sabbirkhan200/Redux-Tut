import * as React from 'react'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

const NotoficationTopbatch = () => {
  return (
    <div style={{ flex: 3, marginRight: 25 }}>
      <Badge variant="dot" color="primary">
        <NotificationsNoneIcon
          color="action"
          style={{ width: 30, height: 30, color: '#32364B ' }}
        />
      </Badge>
    </div>
  )
}

export default NotoficationTopbatch
