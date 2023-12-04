import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Main from '../layouts/Main';
import Card from '../components/Collaborators/Card';
import data from '../data/collaborators';

library.add(far, fas, fab);

const Collaborators = () => (
  <Main
    title="Blog"
    description="See Alperen Keles' collaborators."
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/collaborators">Collaborators</Link></h2>
          <p>A selection of past collaborators.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Card
          data={project}
          key={project.name}
        />
      ))}
    </article>
  </Main>
);

export default Collaborators;
