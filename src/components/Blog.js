
import React from 'react'
import { withRouteData, Link } from 'react-static';
import { hot } from 'react-hot-loader';

//

let Blog = withRouteData(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))

export default Blog;
