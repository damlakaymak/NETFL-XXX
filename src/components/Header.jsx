import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='mb-10'>
        <Link to={"/"}>
        
       <img className='max-w-[150px]' src='https://resqme.com/wp-content/uploads/2021/08/netflix-red-logo2-1-600x164.png' alt='netflix' />
        
        
        </Link>
      
    </header>
  )
}

export default Header
