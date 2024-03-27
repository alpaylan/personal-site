/* eslint-disable no-console */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import raw from 'raw.macro';
import Main from '../layouts/Main';
import data from '../data/blog';

const getArticle = async (name) => {
  return require(`../data/blog/${name}.html`);
}

const BlogPost = (props) => {
  const id = props.data.id;
  console.log(getArticle(id));
  
  return (
      <article className="post markdown" id="about">
        {props.data.title}
      </article>
  );
};
export default BlogPost;
