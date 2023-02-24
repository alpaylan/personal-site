import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/akeles.png`} alt="" />
      </Link>
      <header>
        <h2>Alperen Keles</h2>
        <p><a href="mailto:akeles@umd.edu">akeles@umd.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Alperen. I have many interests.
        I am a <a href="http://ceng.metu.edu.tr">METU CENG</a> graduate,
        currently a second year Ph.D. student at <a href="https://www.cs.umd.edu">UMD CS</a> advised by <a href="https://lemonidas.github.io">Leo</a>.
        I do research on Property-Based Testing and Formal Verification,
        I like to write on my <a href="https://alpkeles99.medium.com">personal blog</a>.
        I also like to play chess, and do the occasional side projects.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Alperen Keles <Link to="/">alperenkeles.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
