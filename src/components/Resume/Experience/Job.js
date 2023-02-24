import React from 'react';
import PropTypes from 'prop-types';

const Keywords = ({ data }) => {
  const styles = {
    border: '2px solid rgba(134, 133, 133, 0.3)',
    borderRadius: '5px',
    marginRight: '.4em',
    background: 'rgb(247, 248, 249)',
    textAlign: 'left',
    paddingTop: '.2em',
    paddingBottom: '.2em',
    paddingLeft: '.2em',
    paddingRight: '.2em',
    color: 'rgb(144, 143, 143)',
  };

  const keywords = data.map((keyword) => (
    <span style={styles}>
      {keyword}
    </span>
  ));
  return (
    <div style={{ marginBottom: '0.6em' }}>
      {keywords}
    </div>
  );
};

Keywords.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4>{data.company}</h4>
      <p className="position">{data.position}</p>
      {(data.keywords && <Keywords data={data.keywords} />)}
      <p className="location">{data.location} </p>
      <p className="daterange"> {data.date}</p>
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
