import React from 'react';

function Nav() {

  const handleClick = (item) => {
    console.log(item);
    return item;
  };
  return (
    <header>
      <h2>
        <a data-testid='link' href='/'>Rochelle Younger</a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a data-testid='about' href='#about' onClick={() => handleClick('About')}>
              About me
            </a>
          </li>
          <li className='mx-2'>
            <span onClick={() => handleClick('Contact')}>Contact</span>
          </li>
          <li className='mx-2'>
            <span
            key='projects'
            onClick={() => handleClick('Projects')} >Projects</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;