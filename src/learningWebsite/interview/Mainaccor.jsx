import React, { useState } from 'react'
import { question } from './AccorApi'
import './accordin.css'
import Myaccrdian from './Myaccor'

const Acoroding = () => {
  const [data, setData] = useState(question)
  return (
    <>
      <section className="main-div">
        {data.map((curElem) => {
          const { id } = curElem
          return <Myaccrdian key={id} {...curElem} />
        })}
      </section>
    </>
  )
}

export default Acoroding
