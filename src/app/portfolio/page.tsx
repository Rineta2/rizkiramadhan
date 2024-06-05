'use client'

import { useState } from 'react'

//============== Router ==============//
import Link from "next/link"

//============== Img ==============//
import Image from "next/image"

//============== Effect ==============//
import { Fade, Zoom } from "react-awesome-reveal";

//============== Data ==============//
import { portfolio, heading } from '@/Components/pages/data/data'

//============== SCSS ==============//
import '@/Components/scss/Portfolio.scss'
export default function Portfolio() {

  const [selectedCategory, setSelectedCategory] = useState('bisnis');

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory === '' ? portfolio : portfolio.filter(id => id.category === selectedCategory)

  return (
    <section className="portfolio">

      <div className="portfolio__container container grid">

        {
          heading.map((item, index) => {
            return (
              <div className="heading" key={index}>
                <div className="text">
                  <Fade direction='left' duration={800} delay={250} triggerOnce>
                    <Link href={'/portfolio'}>{item.berita} {item.icons}</Link>
                  </Fade>

                  <Fade direction='right' duration={800} delay={250} triggerOnce>
                    <h3><b>{item.text}</b></h3>
                  </Fade>
                </div>

                <div className="title">
                  <Fade direction='down' duration={800} delay={250} triggerOnce>
                    <h1>{item.title}</h1>
                  </Fade>

                  <Fade direction='up' duration={800} delay={250} triggerOnce>
                    <p>{item.desc}</p>
                  </Fade>
                </div>
              </div>
            )
          })
        }

        <div className='filter__button'>
          <Zoom duration={800} delay={250} triggerOnce>
            <button className={selectedCategory === 'bisnis' ? 'active' : ""} onClick={() => handleFilter('bisnis')}>Bisnis</button>

            <button className={selectedCategory === 'wedding' ? 'active' : ""} onClick={() => handleFilter('wedding')}>Wedding</button>

            <button className={selectedCategory === 'education' ? 'active' : ""} onClick={() => handleFilter('education')}>Education</button>
          </Zoom>
        </div>

        <div className="portfolio__card">
          {
            filteredData.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <Zoom duration={800} delay={250} triggerOnce>
                    <Image src={item.imgSrc} alt='' />
                  </Zoom>
                  <div className="card__title">
                    <Fade direction='down' duration={800} delay={250} triggerOnce>
                      <h3>{item.title}</h3>
                    </Fade>

                    <Fade direction='up' duration={800} delay={250} triggerOnce>
                      <p>{item.text}</p>
                    </Fade>

                    <div className="icons">
                      <Zoom duration={800} delay={250} triggerOnce>
                        <span>{item.icons1}</span>
                        <span>{item.icons2}</span>
                        <span>{item.icons3}</span>
                        <span>{item.icons4}</span>
                        <span>{item.icons5}</span>
                      </Zoom>
                    </div>

                    <Fade direction='up' duration={800} delay={250} triggerOnce>
                      <Link href={item.href} target='_blank'>Live Priview</Link>
                    </Fade>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>

    </section>
  )
}
