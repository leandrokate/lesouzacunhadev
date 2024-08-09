import React from 'react';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent'>Sobre mim</h2>
            <h3 className='h3 mb-4'>
              Eu sou um Desenvolvedor Freelance que estou iniciando no mercado de desenvolvimento web, já atuo no desenvolvimento do site com Wordpress.
            </h3>
            <p className='mb-6'>
              Venho adquirindo conhecimento e estudando cada dia mais para fazer minnha transição de carreira e assim galgar novas oportunidades para mim e minha família.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiaty text-gradient'>
                  { inView ? <CountUp start={0} end={8} duration={3} /> : null }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Anos de <br />
                  Experiência
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiaty text-gradient'>
                  { inView ? <CountUp start={0} end={15} duration={3} /> : null }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projetos em<br />
                  Wordpress
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiaty text-gradient'>
                  { inView ? <CountUp start={0} end={25} duration={3} /> : null }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Clientes<br />
                  Satisfeitos
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Entre em contato</button>
              <a href='#' className='text-gradient btn-link'>
                Meu Portfólio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  ); 
};

export default About;
