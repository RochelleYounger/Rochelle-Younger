import React from 'react';

function Nav() {

  function projectClick() {
    console.log(`Projects clicked`)
  }
  return (
    <header>
      <h2>
        <a href="/">Rochelle Younger</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li
            className="mx-1"
            key="projects"
          >
            <span onClick={projectClick} >Projects</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;