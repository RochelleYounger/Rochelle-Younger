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
              Bio
            </a>
          </li>
          <li className='mx-2'>
            <a data-testid='projects' href='#projects' onClick={() => handleClick('projects')}>
              Projects
            </a>
          </li>
          <li className='mx-2'>
            <a data-testid='contact' href='#contact' onClick={() => handleClick('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;