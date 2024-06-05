'use client'
import Typewriter from 'typewriter-effect'
import { Fade, Bounce } from "react-awesome-reveal";
import Image from 'next/image';
import Profile from '@/Components/assets/profile.jpg'
import '@/Components/scss/Home.scss'

import { home } from '@/Components/pages/data/data'

export default function Home() {

  return (
    <section className='home'>
      <div className="home__container container grid">
        {home.map((home) => (
          <div className="home__data">
            <div className="home__text">
              <Fade direction='left' duration={800} delay={250}>
                <h2 className='title'>{home.name} <br /></h2>
              </Fade>

              <Fade direction='right' duration={800} delay={250}>
                <span className='subtitle'>{home.desc}</span>
              </Fade>

              <Fade direction='left' duration={800} delay={250}>
                <h3>I'am <span> <Typewriter
                  options={{
                    strings: ['Freelancer', 'Web Disgner', 'Web Developer', 'Content Creator'],
                    autoStart: true,
                    loop: true,
                  }} /></span>
                </h3>
              </Fade>
            </div>

            <div className="profile">
              <Bounce duration={800} delay={250}>
                <Image src={Profile} alt='' />
              </Bounce>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
