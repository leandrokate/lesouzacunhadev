import React from 'react';

import { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if(name === '' || email === '' || message === '') {
      alert("Ops! Preencha todos os campos!");
      return;
    }

    alert("Teste")
  }

  return (
    <section id='contact' className='lg:section py-16'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Entre em Contato</h4>
              <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>
                Vamos trabalhar <br />
                juntos!</h2>
            </div>
          </motion.div>
          <motion.form 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' onSubmit={sendEmail}>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type='text'
            placeholder='Seu nome'
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type='email'
            placeholder='Seu email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
            type='textarea'
            placeholder='Sua mensagem'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            ></textarea>
            <button className='btn btn-lg' type="submit">
              Enviar mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
  
  
};

export default Contact;
