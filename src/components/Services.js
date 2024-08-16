import React from 'react';

// import { BsArrowUpRight } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { Link } from 'react-scroll';

import { fadeIn } from '../variants'



const services = [
  { 
    name: 'UX/UI Designer', 
    description: 'Curso de photoshop e Figma para criação de Layouts de páginas',
    link: 'Veja mais',
  },
  { 
    name: 'Desenvolvimento FrontEnd', 
    description: 'Curso WebModerno na Udemy com o Leonardo Leitão da Cod3r e também no Curso de FullStack PHP do Robson Leite da UpInside',
    link: 'Veja mais',
  },
  { 
    name: 'Desenvolvimento BackEnd', 
    description: 'Curso WebModerno na Udemy com o Leonardo Leitão da Cod3r e também no Curso de FullStack PHP do Robson Leite da UpInside',
    link: 'Veja mais',
  },
  { 
    name: 'Desenvolvimento FullStack', 
    description: 'Curso WebModerno na Udemy com o Leonardo Leitão da Cod3r e também no Curso de FullStack PHP do Robson Leite da UpInside',
    link: 'Veja mais',
  },
]

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Tecnologias</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Sou um Desenvolvedor iniciante no mercado e espero entrar na área com meus conhecimentos adquiridos
            </h3>
            <button className='btn btn-sm'>
                <Link 
                  to='work'
                  smooth={true}
                  spy={true}>
                  Veja meus trabalhos</Link>
              </button>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 '>
            <div>
              {services.map((service, index)=> {
                const {name, description} = service;
                return (
                    <div className='border-b border-white/20 h-[140px] mb-[38px] flex' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{ name }</h4>
                        <p className='font-secondary leading-tight'>{ description }</p>
                      </div>
                      {/* <div className='flex flex-col flex-1 items-end'>
                        <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                          <BsArrowUpRight />
                        </a>
                        <a className='text-gradient text-sm' href='#'>{link}</a>
                      </div> */}
                    </div>
                  );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
