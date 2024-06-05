'use client'
import { useState } from 'react'

import Link from 'next/link'

import { RiMenu5Fill } from "react-icons/ri";

import { FaTimes, FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa";

import { navbar } from '@/Components/pages/data/data'

import '@/Components/scss/Header.scss'

import { usePathname } from 'next/navigation'

import { Zoom, Fade } from "react-awesome-reveal";

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const pathname = usePathname()

  return (
    <>
      <header>
        <nav className='nav container'>
          <Fade duration={1000} triggerOnce delay={500} direction='left'>
            <Link href={'/'} className='profile'>Rizki</Link>
          </Fade>

          <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
            <ul className='nav__list'>

              {
                navbar.map((navbar) => (
                  <li className='nav__item' onClick={() => setShowMenu(false)}>
                    <Zoom duration={1000} triggerOnce delay={500}>
                      <Link className={`nav__link ${pathname === navbar.path ? 'active' : ''}`} href={navbar.path}>{navbar.title}</Link>
                    </Zoom>
                  </li>
                ))
              }

            </ul>

            <div className="nav__close" onClick={() => setShowMenu(false)}>
              <Fade duration={1000} triggerOnce delay={500} direction='right'>
                <FaTimes className='icons' />
              </Fade>
            </div>

            <div className="social">
              <Zoom duration={1000} triggerOnce delay={500}>
                <Link href={'https://www.facebook.com/profile.php?id=100007663247764&locale=id_ID'} className='fb' target='__blank'><FaFacebookF className='icons' /></Link>
                <Link href={'https://www.instagram.com/rzkir.20/'} className='ig' target='__blank'><FaInstagram className='icons' /></Link>
                <Link href={'https://www.linkedin.com/in/rizki-ramadhan-83a17027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className='li' target='__blank'><FaLinkedin className='icons' /></Link>
                <Link href={'https://www.tiktok.com/@rinneeta?_t=8kdA8pCuL0K&_r=1'} className='tt' target='__blank'><FaTiktok className='icons' /></Link>
                <Link href={'https://github.com/Rineta2'} className='tt' target='__blank'><FaGithub className='icons' /></Link>
              </Zoom>
            </div>

          </div>

          <div className="hamburger" onClick={() => setShowMenu(true)}>
            <Fade duration={1000} triggerOnce delay={500} direction='right'>
              <RiMenu5Fill />
            </Fade>
          </div>
        </nav>
      </header>
    </>
  )
}
