import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
require("prismjs/themes/prism-okaidia.css");

import Seo from "../components/Seo";
import Article from "../components/Article";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../layouts";

const PostTemplate = props => {
  const {
    data: {
      post,
      authornote: { html: authorNote },
      site: {
        siteMetadata: { facebook }
      }
    },
    pageContext: { next, prev }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "3em" }}>
            <Article theme={theme}>
              <Post
                post={post}
                next={next}
                prev={prev}
                authornote={authorNote}
                facebook={facebook}
                theme={theme}
              />
            </Article>
            <Sidebar theme={theme}>
              <h2>Popular posts</h2>
              <ul>
                <li>One post</li>
                <li>Two posts</li>
                <li>Three posts</li>
              </ul>
            </Sidebar>
          </div>
        )}
      </ThemeContext.Consumer>

      <Seo data={post} facebook={facebook} />
    </React.Fragment>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        author
        category
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
    authornote: markdownRemark(fileAbsolutePath: { regex: "/author/" }) {
      id
      html
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
