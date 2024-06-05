'use client'
import Image from 'next/image'

import { about, icons, background } from '@/Components/pages/data/data'

import { Slide, Fade, Zoom } from "react-awesome-reveal";

import '@/Components/scss/About.scss'

export default function About() {

  return (
    <>
      <section className="about">
        <div className="about__container container grid">
          {about.map((about) => (
            <div className="about__data">
              <Slide direction='left' duration={500} delay={250} triggerOnce>
                <div className="about__img">
                  <Image src={about.imgSrc} alt="" />
                </div>
              </Slide>

              <div className="about__text">
                <Fade direction='right' duration={500} delay={250} triggerOnce>
                  <h2 className='profile'>{about.profile}</h2>
                </Fade>

                <Fade direction='left' duration={500} delay={250} triggerOnce>
                  <h1 className='name'>{about.name}</h1>
                </Fade>

                <Zoom direction='right' duration={600} delay={250} triggerOnce >
                  <p className='desc'>{about.desc}</p>
                </Zoom>

                <Fade direction='down' duration={500} delay={250} triggerOnce>
                  <h3 className='background'>{about.background}</h3>
                </Fade>

                <div className="my__background">
                  {
                    background.map((background) => (
                      <Fade direction='down' duration={500} delay={250} triggerOnce>
                        <div className="box" key={background.id}>
                          <Zoom damping={0.5} triggerOnce delay={500} duration={1000}>
                            <div className="icons">{background.icons}</div>
                            <p className="school">{background.school}</p>
                            <p className="year">{background.year}</p>
                            <p className="kejuruan">{background.kejuruan}</p>
                          </Zoom>
                        </div>
                      </Fade>
                    ))
                  }
                </div>

              </div>

            </div>
          ))}
        </div>
      </section >

      <section className="skills">
        <div className="skills__container container grid">
          <Zoom damping={0.1} triggerOnce={true}>
            <h1>My <span>Skills</span></h1>
          </Zoom>


          <div className="my__skills">
            {
              icons.map((icons) => (
                <Zoom damping={0.5} triggerOnce={true}>
                  <div className="box" key={icons.id}>
                    <p className="icon">{icons.icon}</p>
                  </div>
                </Zoom>
              ))
            }
          </div>

        </div>
      </section >

    </>
  )
}
