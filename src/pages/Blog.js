import React, { useEffect } from 'react';
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
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

library.add(far, fas, fab);


const ArticlesBar = (props) => (
  <article className="articlebar" id="articles">
    <h2 data-testid="heading">Articles</h2>
    {data.map((project) => (
      <p
        className='project-title'
        key={project.title}
        onClick={() => {
          props.setSelected(data.indexOf(project));
          window.scrollTo(0, 0);
          window.history.pushState({}, '', encodeURI(`/blog/${project.id}`));
        }}
        style={{ cursor: 'pointer', fontWeight: props.selected === data.indexOf(project) ? 'bold' : 'normal' }}
      >{project.title}</p>
    ))}
  </article>
);



const ArticleCards = () => (
  <article className="cards">
    {data.map((project) => (
      <Cell
        data={project}
        key={project.title}
      />
    ))}
  </article>
);

const Blog = () => {
  const { id } = useParams();
  const [selected, setSelected] = React.useState(id ? data.findIndex((post) => post.id === id) : 0);

  useEffect(() => {
    window.onpopstate = () => {
      const id = window.location.pathname.split('/').pop();
      setSelected(data.findIndex((post) => post.id === id));
    }
  });

  return (
    <Main
      title="Blog"
      description="See Alperen Keles' blog posts."
      hideBar={true}
    >
      <div className="blogpage">
          <ArticlesBar selected={selected} setSelected={setSelected} />
        <BlogPost
          data={data[selected]}
          key={data[selected].title}
        />

      </div>
    </Main>
  )
};

export default Blog;
