import React from 'react'
import "./Home.css"
import Land from '../components/homec/land/Land'
import Adop from '../components/homec/adop/Adop'


function Home() {
  return (
        <div className='home-page'>

          <div className='landing'>
            <Land/>
          </div>

          <div className='adopting'>
            <Adop/>
          </div>
        </div>
  )
}

export default Home