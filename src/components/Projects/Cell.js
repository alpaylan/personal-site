import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

function truncate(str, n) {
  return (str.length > n) ? `${str.substr(0, n - 1)}...` : str;
}

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <p>{data.subtitle}</p>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <div className="description">
        <p>{truncate(data.desc, 250)}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
