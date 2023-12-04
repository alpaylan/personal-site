import React from 'react';
import PropTypes from 'prop-types';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';
import { Twitter } from '@mui/icons-material';

const Card = ({ data }) => (
  <div className="card-container">
    <h3>{data.name}
      {data.linkedin && <Link href={data.linkedin}> <LinkedInIcon /> </Link>}
      {data.twitter && <Link href={data.twitter}> <Twitter /> </Link>}
    </h3>
  </div>
);

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    commonProjects: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
