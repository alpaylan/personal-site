import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/blog';

library.add(far, fas, fab);

const Blog = () => (
  <Main
    title="Blog"
    description="See Alperen Keles' blog posts."
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <p>A selection of blog posts. </p>
          <p>Visit <b><a href="http://alpkeles99.medium.com" target="_blank" rel="noreferrer">my medium blog <FontAwesomeIcon icon="fab fa-medium" /> </a></b> for more posts.</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Blog;
