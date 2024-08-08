import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section id='home' className='section'>
      <div className='container mx-auto'>
        {/* { TEXTO } */}
        <div>
          <h1>
            Leandro <span>Cunha</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>Eu sou um</span>
            <TypeAnimation sequence={[
              'Developer', 2000,
              'Designer', 2000,
              'Dad', 2000,
            ]}
            speed={50} 
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </div>
        </div>
        {/* { IMAGEM } */}
        <div>
          <img src={Image} alt='' />
        </div>
      </div>
    </section>
  ); 
};

export default Banner;
