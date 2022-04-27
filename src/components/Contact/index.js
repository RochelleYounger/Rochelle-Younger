import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      {/* REUSED CODE FROM CHALLENG 2 - https://github.com/RochelleYounger/Portfolio */}
      <h2>Contact</h2>
      <div>
        <ul>
          <li>
            <a href="">555.555.5555</a>
          </li>
          <li>
            <a href="https://ca.linkedin.com/" target="blank">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/" target="blank">GitHub</a>
          </li>
          <li>
            <a href="mailto:info@rochelleyounger.com" target="blank">info@rochelleyounger.com</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;