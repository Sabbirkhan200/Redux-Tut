import React from 'react'
import RowAndColumnSpacing from './Aboutsocial'
import CustomImageList from './Morepic'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const About = () => {
  return (
    <body style={{ backgroundColor: 'lightgray' }}>
      <div>
        <div
          style={{
            textAlign: 'center',
            border: '5px solid white',
            borderRadius: '0px 0px 30px 30px',
          }}
        >
          <img
            src="./pic\278010979_3207176826195073_8297853833223420057_n.jpg"
            class="img-fluid"
            alt="..."
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: -150 }}>
          <img
            src="/pic/sabbir.jpg"
            style={{
              width: '20%',
              borderRadius: '50%',
              border: '4px solid white',
            }}
          />
          <div
            style={{
              backgroundColor: 'white',
              marginLeft: 400,
              marginTop: 10,
              marginRight: 400,
              border: '5px solid white',
              borderRadius: '10px',
              fontSize: 40,
            }}
          >
            <span className='sabbr'>SABBIR KHAN</span>
          </div>
          <p>@sabbir-kahn</p>
        </div>
        <RowAndColumnSpacing />
        <CustomImageList />
      </div>
    </body>
  )
}

export default About
