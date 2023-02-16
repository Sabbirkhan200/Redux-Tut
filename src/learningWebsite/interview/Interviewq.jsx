import { Accordion, AccordionSummary } from '@mui/material'
import React from 'react'

import CustomizedAccordions from './Interviewr'
import Acoroding from './Mainaccor'

const Interviewq = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1
        style={{
          textAlign: 'center',
          border: '5px solid white',
          margin: '20px 400px ',
          borderRadius: 20,
          backgroundColor: 'lightblue',
        }}
      >
        Interview Preparation
      </h1>
      {/* <CustomizedAccordions /> */}
      <div>
        <Acoroding />
        <CustomizedAccordions />
      </div>
    </div>
  )
}

export default Interviewq
