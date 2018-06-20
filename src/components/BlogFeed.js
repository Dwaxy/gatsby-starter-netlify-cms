import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

const BlogFeed = (props) => {
  return (
    <section className="blog-feed">

      <div className="feed-title">
        <h1>Latest Posts</h1>
      </div>
      {props.postData.edges
        .map(({ node: post }) => (
          <div className="blog-preview-holder" key={post.id}>
            <div className="blog-preview">
              <h2 className="title">
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </h2>
              <p className="preview">
                {post.excerpt}
              </p>
              <Link className="read-more" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </div>
            <div className="date-holder">
              <small className="date">{post.frontmatter.date}</small>
            </div>
          </div>
        ))}
          
    </section>
  )
}

export default BlogFeed