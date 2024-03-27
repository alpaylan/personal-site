import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
    <div style={{ display: "flex", flexGrow: "row", justifyContent: "space-between"}}>
      <h4 className="degree">{data.degree}</h4>
      <h4 className="date"> {data.year}</h4>
      </div>
      <p className="school"><a href={data.link}>{data.school}</a></p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Degree;
