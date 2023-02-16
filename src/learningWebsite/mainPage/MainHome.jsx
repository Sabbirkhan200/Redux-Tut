import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../about/About'
import Bosstrap from '../bostrap/Bosstrap'
import Css from '../css/Css'

import Goudeline from '../gaideline/Goudeline'
import Home from './Home'
import Html from '../html/Html'
import Installation from '../installa/Installation'
import Interviewq from '../interview/Interviewq'
import Javscript from '../javascriptt/Javscript'
import Layout from './Layout'
import NoPage from './NoPage'
import ReactPage from '../reactpage/ReactPage'

export default function MainHome() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="bosstrap" element={<Bosstrap />} />
          <Route path="javascript" element={<Javscript />} />
          <Route path="react" element={<ReactPage />} />
          <Route path="installation" element={<Installation />} />
          <Route path="interviewq" element={<Interviewq />} />
          <Route path="goudeline" element={<Goudeline />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
