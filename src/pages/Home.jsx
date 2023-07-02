import React from 'react'
import "./Home.css"
import Land from '../components/homec/land/Land'


function Home() {
  return (
        <div className='home-page'>

          <div className='landing'>
              <Land/>
          </div>

          <div className='dd'>hello</div>
        </div>
  )
}

export default Home