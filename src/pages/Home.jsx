import React from 'react'
import Video from '../components/home/video'
import Homeherotext from '../components/home/Homeherotext'
import Homebottomtext from '../components/home/Homebottomtext'

const Home = () => {
  return (
    <div>
      <div className=' fixed h-screen w-screen'>
      <Video/>
      </div>
      <div className='h-screen  w-1/2 relative flex flex-col'>
       <Homeherotext/>
       <Homebottomtext/>
      </div>
      
      
    </div>
  )
}

export default Home