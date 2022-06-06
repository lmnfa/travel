import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'
import Search from '../routes/Search'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
const [inputVal, setInputVal]=useState('')
    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)
const setSearchValue=(val)=>{
    setInputVal(val)
}
    return (
        <div className={color ? 'header header-bg' : 'header'}>
           <Link to='/'><h1>LMNFA TRVL</h1></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Search value={inputVal} setSearchValue={setSearchValue}/> 
               </li>
               <li>
                   <Link to='/pricing'>Pricing</Link>
               </li>
               <li>
                   <Link to='/service'>Service</Link>
               </li>
               <li>
                   <Link to='/contact'>Contact</Link>
               </li>
               <li>
                   <Link to='/search'> Search</Link>
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>
        </div>
    )
}

export default Navbar
