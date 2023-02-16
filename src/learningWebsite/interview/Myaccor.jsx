import React, { useState } from 'react'

const Myaccrdian = ({ question, answer }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="main-heading">
        <p onClick={() => setShow(!show)}> {show ? '-' : '+'} </p>
        <h4 >{question}</h4>
      </div>
      {show && <p className="answers">{answer}</p>}
    </>
  )
}

export default Myaccrdian
