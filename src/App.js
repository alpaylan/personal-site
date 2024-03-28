import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

inject();

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const Collaborators = lazy(() => import('./pages/Collaborators'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/blog/" component={BlogPage} />
        <Route path="/collaborators" component={Collaborators} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
