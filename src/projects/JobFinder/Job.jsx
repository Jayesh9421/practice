import React from 'react'
import Navbar from './Navbar'
import SearchDiv from './SearchDiv'
import ValueDiv from './ValueDiv'
import FooterDiv from './FooterDiv'
import Jobs from './Jobs'

const Job = () => {
  return (
    <div className='w-[85%] bg-white'>
        <Navbar/>
        <SearchDiv/>
        <Jobs/>
        <ValueDiv/>
        <FooterDiv/>
    </div>
  )
}

export default Job
