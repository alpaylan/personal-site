import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const ProjectsBar = (props) => (
  <article className="post" id="projects">
    <h2 data-testid="heading">Projects</h2>
    {data.map((project) => (
      <p
        className='project-title'
        key={project.title}
        onClick={() => props.setSelected(data.indexOf(project))}
        style={{ cursor: 'pointer', fontWeight: props.selected === data.indexOf(project) ? 'bold' : 'normal' }}
      >{project.title}</p>
    ))}
  </article>
);

const Projects = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Main
      title="Projects"
      description="Learn about Alperen Keles' projects."
      hideBar={true}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ProjectsBar selected={selected} setSelected={setSelected} />
        <article className="post" id="projects">
          {
            <Cell
              data={data[selected]}
              key={data[selected].title}
            />
          }
        </article>
      </div>
    </Main>
  )
};

export default Projects;
