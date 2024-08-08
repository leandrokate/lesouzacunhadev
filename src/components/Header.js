import React from 'react';

import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='containe mx-auto'>
      <div className='flex justify-between items-center'>
        {/* { LOGO } */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        {/* { BOTÃO} */}
        <button className='btn btn-sm'>Meus Projetos</button>
      </div>
    </div>
  </header>;
};

export default Header;
