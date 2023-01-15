import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from './Title'
import { FaArrowRight } from 'react-icons/fa'
import { VscClose } from 'react-icons/vsc'

const Search = ({setIsSearchModal}) => {
return (
    <div className='modal-wrapper'>
        <OutsideClickHandler onOutsideClick={()=> setIsSearchModal(false)}>
            <div className='modal'>
                <div className='modal-top'>
                  <button onClick={() => setIsSearchModal(false)}><VscClose className='modal-close__icon' /></button>
               </div>

                <Title addClass='search-title text-4xl'>Search</Title>

                <input type='text' placeholder='Search...' className='input' />

                <ul className='search-list'>
                    <li className='search-list__item'>
                        <img src='images/pizza-1.png' alt='pizza' />
                        <span className='text'>Pizza</span>
                        <FaArrowRight className='icon'/>
                    </li>
                    <li className='search-list__item'>
                        <img src='images/hamburger-1.png' alt='hamburger' />
                        <span className='text'>Hamburger</span>
                        <FaArrowRight className='icon'/>
                    </li>
                    <li className='search-list__item'>
                        <img src='images/pasta-1.png' alt='pasta' />
                        <span className='text'>Pasta</span>
                        <FaArrowRight className='icon'/>
                    </li>
                    <li className='search-list__item'>
                        <img src='images/chips.png' alt='chips' />
                        <span className='text'>Chips</span>
                        <FaArrowRight className='icon'/>
                    </li>
                </ul>
            </div>
        </OutsideClickHandler>
    </div>
    )
}

export default Search