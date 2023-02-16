import React from 'react'
import CustomizedAccordion from './Dayhtml'

const Goudeline = () => {
  return (
    <div>
      <h1
        className="card"
        style={{
          textAlign: 'center',
          backgroundColor: 'greenyellow',
          marginRight: 114,
          marginLeft: 114,
          marginTop: 20,
        }}
      >
        Full stack Web Application Development
      </h1>
      <div
        className="card"
        style={{
          textAlign: 'center',
          backgroundColor: '#ef9a9a',
          marginRight: 114,
          marginLeft: 114,
        }}
      >
        <h3>Technology Stack </h3>
        <ol>
          <li>HTM ✅</li>
          <li> CSS ✅</li>
          <li> Bootstrap ✅ </li>
          <li>JavaScript ✅</li>
          <li>5 minor Project ✅</li>
          <li> ReactJS ✅</li>
          <li> Firebase ✅</li> 
          <li> MongoDB ✅</li>
          <li> Node ✅</li>
          <li> Express ✅</li>
          <li> GIT VERSION control ✅</li>
          <li> 5 Major Project ✅</li>
          <li> Deployment ✅</li>
        </ol>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>HTML</h1>     
        <CustomizedAccordion />
      </div>
    </div>
  )
}

export default Goudeline
