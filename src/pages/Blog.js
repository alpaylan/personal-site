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
import BlogPost from './BlogPost';

library.add(far, fas, fab);


const ArticlesBar = (props) => (
  <article className="post" id="projects">
    <h2 data-testid="heading">Articles</h2>
    {data.map((project) => (
      <p
        className='project-title'
        key={project.title}
        onClick={() => {props.setSelected(data.indexOf(project)); window.scrollTo(0, 0);} }
        style={{ cursor: 'pointer', fontWeight: props.selected === data.indexOf(project) ? 'bold' : 'normal' }}
      >{project.title}</p>
    ))}
  </article>
);


const Blog = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Main
      title="Blog"
      description="See Alperen Keles' blog posts."
      hideBar={true}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ArticlesBar selected={selected} setSelected={setSelected} />
        <article className="post" id="projects">
          {
            <BlogPost
              data={data[selected]}
              key={data[selected].title}
            />
          }
        </article>
      </div>
    </Main>
  )
};

export default Blog;
