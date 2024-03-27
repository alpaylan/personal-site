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
      </header>
    </section>

    <section className="blurb">
      <ContactIcons />
    </section>


    <section id="footer">

      <p className="copyright">&copy; Alperen Keles <Link to="/">alperenkeles.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
