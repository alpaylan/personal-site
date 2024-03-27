/* eslint-disable no-console */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import raw from 'raw.macro';
import Main from '../layouts/Main';
import data from '../data/blog';

import html from "../data/blog/hurdles-of-designing-a-layout-model.html"
const getArticle = async (name) => {
  const html = await import(`../data/blog/${name}.html`).then((res) => res.default);
  // set html of the article to the content of the file
  return <div dangerouslySetInnerHTML={{__html: html }} />
}

const BlogPost = (props) => {
  const id = props.data.id;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    getArticle(id).then((res) => {
      setPost(res);
    });
  }, [id]);

  return (
      <article className="post markdown" id="about">
        {props.data.title}
        {post && post}
      </article>
  );
};
export default BlogPost;
