import React from 'react'
import PropTypes from 'prop-types'
import BlogFeed from '../components/BlogFeed.js'
import PostTimeline from '../components/PostTimeline.js'
import HomeSidebar from '../components/HomeSidebar.js'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <section className="home">
        
        <div className="left">
          <BlogFeed postData={data.allMarkdownRemark}/>
        </div>
        
        <div className="right">
          <HomeSidebar />
        </div>
            
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            tags
            featuredImage {
               childImageSharp{
                    sizes(maxWidth: 1000) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
            
          }
        }
      }
    }
  }
`

