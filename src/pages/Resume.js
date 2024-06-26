import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons/faFileArrowDown';
import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const sections = [
  'Education',
  'Work Experience',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Resume of Alperen Keles."
  >
    <article className="resume" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            <h4><a href="documents/resume.pdf" download="alperen_keles.pdf"> Download as PDF <FontAwesomeIcon icon={faFileArrowDown} /> </a></h4>
          </div>

        </div>
      </header>
      <div className='experiences'>
      <Education data={degrees} />
      <Experience data={positions} />
      </div>
    </article>
  </Main>
);

export default Resume;
