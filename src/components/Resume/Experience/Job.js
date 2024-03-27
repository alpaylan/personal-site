import React from 'react';
import PropTypes from 'prop-types';

const Keywords = ({ data }) => {
  const keywords = data.join(' | ')
  return (
    <p className='school' style={{marginTop: "-2em", marginBottom: "0.2em"}}>
      {keywords}
    </p>
  );
};

Keywords.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Job = ({ data }) => (
  <article className="degree-container">
    <header>
      <div style={{ display: "flex", flexGrow: "row", justifyContent: "space-between"}}>
      <h4 className="degree">{data.company}</h4>
      <h4 className="date"> {data.date}</h4>
      </div>
      <div style={{ display: "flex", flexGrow: "row", justifyContent: "space-between"}}>
      <p className="school">{data.position}</p>
      <p className="school">{data.location} </p>
      </div>
      {(data.keywords && <Keywords data={data.keywords} />)}
      
    </header>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Job;
