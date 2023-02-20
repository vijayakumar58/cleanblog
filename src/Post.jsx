import React from 'react'
import Postcontent from './Postcontent'
import Postheader from './Postheader'
//import Postnavigation from './Postnavigation'

function Post() {
  return (
    <div>
        {/* <Postnavigation></Postnavigation> */}
        <Postheader></Postheader>
        <Postcontent></Postcontent>
    </div>
  )
}

export default Post