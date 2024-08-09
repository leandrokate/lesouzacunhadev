import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants'



const services = () => [
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
    name: 'Banco de Dados, API e Integrações', 
    description: 'Curso WebModerno na Udemy com o Leonardo Leitão da Cod3r e também no Curso de FullStack PHP do Robson Leite da UpInside',
    link: 'Veja mais',
  },
]

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Tecnologias</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Sou um Desenvolvedor iniciante no mercado e espero entrar na área com meus conhecimentos adquiridos
            </h3>
            <button className='btn btn-sm'>Veja meus Trabalhos</button>
          </div>
          <div>
            Tecnologia
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
