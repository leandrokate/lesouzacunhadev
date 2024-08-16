import React from 'react';

import { Link } from 'react-scroll'

import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='https://lesouzacunha.dev'>
          <img src={Logo} alt='' />
        </a>
        <button className='btn btn-sm'>
        <Link 
          to='work'
          smooth={true}
          spy={true}>
          Meus Projetos</Link></button>
      </div>
    </div>
  </header>;
};

export default Header;
