import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function truncate(str, n) {
  return (str.length > n) ? `${str.substr(0, n - 1)}...` : str;
}

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <p>{data.subtitle}</p>
        <time className="published">{dayjs(data.date).format('MMM, YYYY')}</time>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <span className={`celltag ${data.type}`}>{data.type}</span>
          <span className="cellviews"> <FontAwesomeIcon icon="fa-regular fa-eye" /> {data.views}</span>
        </div>
      </header>
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
