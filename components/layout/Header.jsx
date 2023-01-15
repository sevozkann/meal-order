import { useState } from 'react'
import React from 'react'
import Logo from '../ui/Logo'
import Search from '../ui/Search'
import { FaUserAlt, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscClose } from 'react-icons/vsc'
import { useRouter } from 'next/router'



const Header = () => {
   const [isSearchModal, setIsSearchModal] = useState(false)
   const [isMenuModal, setIsMenuModal] = useState(false)
   const router = useRouter();

  return (
    <div className={`header-wrapper ${router.asPath === '/' ? '-home' : ''}`}>
        <div className='header'>
            <div><Logo/></div>
            <nav className={`nav ${isMenuModal == true && '-open'}`}>
               <div className='nav-top'>
                  <button onClick={() => setIsMenuModal(false)}><VscClose className='menu-icon' /></button>
               </div>
               <ul className='nav-list'>
                  <li>
                     <a href='index.html'>Home</a>
                  </li>
                  <li>
                     <a href='menu.html'>Menu</a>
                  </li>
                  <li>
                     <a href='about.html'>About</a>
                  </li>
                  <li>
                     <a href='about.html'>BOOK TABLE</a>
                  </li>
                </ul>
            </nav>
            <div className='flex items-center gap-4'>
               <a href=''><FaUserAlt className='menu-icon'/></a>
               <a href=''><FaShoppingCart className='menu-icon'/></a>
               <button onClick={() => setIsSearchModal(true)}><FaSearch className='menu-icon'/></button>
               <a href='' className='btn-primary hidden md:inline-block'>Order Online</a>
               <button onClick={() => setIsMenuModal(true)} className='hamburger'><GiHamburgerMenu className='text-white text-xl'/></button>
            </div>
        </div>

        { isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  )
}

export default Header