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
    <h2 id="heading">Articles</h2>
    {data.map((project) => (
      <div
        className='project-title'
        key={project.title}
        onClick={() => {
          props.setSelected(data.indexOf(project));
          window.scrollTo(0, 0);
          window.history.pushState({}, '', encodeURI(`/blog/${project.id}`));
        }}
        style={{
          cursor: 'pointer',
          fontSize: "1em",
          fontWeight: props.selected === data.indexOf(project) ? 'bold' : 'normal',
        }}
      >
        {project.title}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <span style={{ fontSize: '0.8em' }}>{project.date}</span>
          <div>
            <span className={`celltag ${project.lang}`} style={{ fontSize: '0.8em', marginLeft: '1em' }}>{project.lang}</span>
            <span className={`celltag ${project.type}`} style={{ fontSize: '0.8em', marginLeft: '1em' }}>{project.type}</span>
          </div>
        </div>
      </div>
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
