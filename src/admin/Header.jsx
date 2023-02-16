import React from 'react'
import AvterTop from './AvterTop'
import NotoficationTopbatch from './NotoficationTopbatch'
import AppBar from '@mui/material/AppBar'
const Header = () => {
  return (
    <AppBar component="nav">
      <div
        style={{
          display: 'flex',
          backgroundColor: '#F4F5F7',
          height: 45,
          borderBottom: '1px solid #3ADDD8',
          flex: 1,
          textAlign: 'Right',
          paddingTop: 15,
          paddinBottom: 0,
          position: 'sticky',
          top: 0,
        }}
      >
        <img
          style={{ height: 38, width: 200, paddingLeft: '1%' }}
          src="/Images/GofoodLogo.png"
          alt=""
          srcset=""
        />
        {/* <NotoficationTopbatch /> */}
        <AvterTop />
      </div>
    </AppBar>
  )
}

export default Header
