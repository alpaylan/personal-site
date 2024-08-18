/* eslint-disable no-console */
import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

const getArticle = async (name) => {
  const html = await import(`../data/blog/${name}.html`).then((res) => res.default);
  // set html of the article to the content of the file
  return html;
}

const BlogPost = (props) => {
  const id = props.data.id;
  const post = useRef(null);
  const [html, setHtml] = React.useState('');
  useLayoutEffect(() => {
    getArticle(id).then((html) => {
      setHtml(html);
      const range = document.createRange();
      range.selectNode(post.current);
      const documentFragment = range.createContextualFragment(html);

      // Inject the markup, triggering a re-run! 
      post.current.innerHTML = '';
      post.current.append(documentFragment);
      hljs.highlightAll();
    });

  }, [id]);

  return (
    <article className="markdown" id="about">
      <div
        ref={post}
        dangerouslySetInnerHTML={{ __html: html }}>
      </div>
    </article >
  );
};
export default BlogPost;
