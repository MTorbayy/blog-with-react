import React, {useState, useEffect} from 'react'
import './Navbar.css'
import Menu from './menu.svg'
import {Link} from 'react-router-dom'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        
        const changeWidth = () => {
            setLargeur(window.innerWidth)
        }
        
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])


    return (
        <nav>
            {(toggleMenu || largeur > 500) && (
            <ul className="liste">
                <li className="items">
                    <Link to={process.env.PUBLIC_URL + '/'}>Accueil</Link>
                </li>
                <li className="items">
                    <Link to={process.env.PUBLIC_URL + '/ecrire'}>écrire</Link>
                </li>
                <li className="items">
                    <Link to={process.env.PUBLIC_URL + '/contact'}>Contact</Link>
                </li>
            </ul>
            )}
            
            <img 
            src={Menu}
            onClick={toggleNav}
            className="btn" alt="Menu" />
        </nav>
    )
}
