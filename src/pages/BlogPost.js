/* eslint-disable no-console */
import React from 'react';

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
    fetch('https://alperenkelescom.fly.dev/view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "post-id": id })
    });
  }, [id]);

  return (
      <article className="markdown" id="about">
        {post && post}
      </article>
  );
};
export default BlogPost;
