import React from 'react'
import { withRouteData, Link } from 'react-static'
//

let Post = withRouteData(({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
))

export default Post;
