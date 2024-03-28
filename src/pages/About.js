import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { ArticleList } from '../pages/BlogPage';

// Make all hrefs react router links
const BlogTable = () => {
  return (
    <div className='blogtable'>
      <ArticleList limit={10} sorting="date" />
    </div>
  )
};


const About = () => (
  <Main
    title="About"
    description="Learn about me!"
  >
    <div className="abouttext">
      <h1>
        Hi, I'm Alperen!
      </h1>

      <p>
        I am a <a href='https://ceng.metu.edu.tr' target='_blank' rel='noopener noreferrer'>METU CENG</a> graduate,
        currently a Ph.D. student at <a href='https://www.cs.umd.edu' target='_blank' rel='noopener noreferrer'>UMD CS</a> advised
        by <a href='https://lemonidas.github.io' target='_blank' rel='noopener noreferrer'>Leonidas Lampropoulos</a>.
      </p>
      <p>
        My research focuses on Property-Based Testing, Fuzzing, and Semantics of Document Systems.
        I like to write on my personal blog. I also like to play chess, and do the occasional side projects.
      </p>

    </div>
    <BlogTable />
  </Main>
);

export default About;
