import React from 'react'

import { Hero, Gallery, Skill, FormContact, Footer } from '../../components'

const Home = () => {
    return(
      <div>
          <Hero />
          <section className='container mx-auto'>
              <p className='font-light text-lg md:text-xl px-6 lg:px-32 py-20 md:py-32'>Hey! Soy Mario Campbell, Diseñador Gráfico y autodidacta. Me considero una persona trabajadora, pro-activa y creativa, motivado siempre por aprender nuevas habilidades. Adaptable a los cambios y entornos de trabajos, con la visión del equipo. Amante de la cultura japonesa y de la filosofía samurai.</p>
          </section>
          {/* PORTFOLIO */}
          <section className='container mx-auto px-4 md:px-0 pb-20 md:pb-32'>
              <h1 className='uppercase font-headers font-light text-primary-500 text-3xl'>Portfolio</h1>
              <Gallery />
          </section>
          {/* HABILIDADES */}
          <section className='container mx-auto px-4 md:px-0 pb-20 md:pb-32'>
              <h1 className='uppercase font-headers font-light text-primary-500 text-3xl'>habilidades</h1>
              <section className='flex flex-col md:flex-row md:space-x-16'>
                  {/* DISENO GRAFICO */}
                  <article className='pt-8 md:pt-4 w-full md:w-6/12'>
                      <h2 className='uppercase font-semibold text-gray-700'>Diseño Grafico</h2>
                      <div className='mt-2'>
                          <Skill skill='Adobe XD / Figma' />
                          <Skill level={4} skill='Adobe Illustrator' />
                          <Skill skill='Adobe Photoshop' />
                          <Skill skill='Adobe inDesign' />
                          <Skill level={4} skill='Adobe After Effects' />
                          <Skill skill='Adobe Animate' />
                          <Skill level={4} skill='AutoCAD' />
                          <Skill level={2} skill='Lightwave 3D' />
                          <Skill skill='Marvelous Designer' />
                      </div>
                  </article>
                  {/* PROGRAMACION */}
                  <article className='pt-8 md:pt-4 w-full md:w-6/12'>
                      <h2 className='uppercase font-semibold text-gray-700'>Programacion</h2>
                      <div className='mt-2'>
                          <Skill skill='Nodejs / Express' />
                          <Skill level={4} skill='MongoDB' />
                          <Skill skill='React.js' />
                          <Skill level={2} skill='Angular / Emberjs' />
                          <Skill skill='TypeScript' />
                          <Skill level={4} skill='Frameworks CSS' />
                          <Skill level={4} skill='GreenSock / Anime.js' />
                          <Skill skill='POO en Js' />
                          <Skill skill='Wordpress' />
                      </div>
                  </article>
              </section>
          </section>
          {/* CONTACTOS */}
          <section className='container mx-auto px-4 md:px-0 pb-40'>
              <h1 className='uppercase font-headers font-light text-primary-500 text-3xl'>Contactos</h1>
              {/* formulario de contactos */}
              <FormContact />
          </section>

          <Footer />
          </div>
    )
}

export default Home
