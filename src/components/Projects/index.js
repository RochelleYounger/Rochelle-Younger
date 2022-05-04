import React from 'react';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <p>Check out some of my projects</p>
      {/* REUSED CODE FROM CHALLENG 2 - https://github.com/RochelleYounger/Portfolio */}
      <div id="projects" className="items">
        <ul>
          <li>
            <a href="">Run Buddy</a>
          </li>
          <li>
            <a href="">Horiseon</a>
          </li>
          <li>
            <a href="https://github.com/RochelleYounger/Project_Grumble">Grumble</a>
          </li>
          <li>
            <a href="https://fathomless-thicket-11670.herokuapp.com/">Dev-Den</a>
          </li>
          <li>
            <a href="https://github.com/RochelleYounger/Motiv8">Motiv8 Repo</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
