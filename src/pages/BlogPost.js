/* eslint-disable no-console */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import raw from 'raw.macro';
import Main from '../layouts/Main';
import data from '../data/blog';

function getPost(id) {
  const post = data.find((p) => p.id === id);
  post.markdown = raw(`../data/blog/${id}.md`);
  post.count = post.markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  console.log(post);
  return post;
}

console.log('2');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const BlogPost = () => {
  const { id } = useParams();
  const post = getPost(id);
  return (
    <Main
      title={post.title}
      description={post.desc}
    >
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/about">{post.title}</Link></h2>
            <p>(in about {post.count} words)</p>
          </div>
        </header>
        <ReactMarkdown
          renderers={{
            Link: LinkRenderer,
            code: ({ value }) => (
              <SyntaxHighlighter language="javascript" style={oneLight}>
                {value}
              </SyntaxHighlighter>
            ),
          }}
        >{post.markdown}
        </ReactMarkdown>
      </article>
    </Main>
  );
};
export default BlogPost;
