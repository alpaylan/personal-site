import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label} style={{ marginBottom: '0.2em'}}>
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} style={{ marginRight: '0.5em'}} />
          {s.username}
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
