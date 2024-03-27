import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';
import NewsLetter from '../components/Template/Newsletter';

const Main = (props) => {
  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet titleTemplate="%s | Alperen Keles" defaultTitle="Alperen Keles" defer={false}>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {props.children}
        </div>
        {props.fullPage || props.hideBar ? null : <SideBar />}
        <NewsLetter />
      </div>
    </HelmetProvider>
  )
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: 'Personal Website of Alperen Keles.',
};

export default Main;
