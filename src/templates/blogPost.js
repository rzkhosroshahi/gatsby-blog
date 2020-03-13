import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import { BlogLayout } from "../components/BlogLayout"
import { H1 } from "../components/H1"
import { PostHtml } from "../components/PostHtml"
import { PostPageHelmet } from "../components/Helmet"
import { PostNavigate } from "../components/PostNavigate"

const TemplateDiv = styled("div")`
  margin-top: calc(3 * var(--base-line));

  .post__content {
    margin-top: calc(1 * var(--base-line));
  }
`
const Template = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { frontmatter } = markdownRemark
  const { title } = frontmatter
  const { next, prev, pathSlug: slug } = pageContext
  const disqusConfig = {
    shortname: "itstardis-me",
    config: { identifier: slug, title },
  }
  return (
    <BlogLayout>
      <PostPageHelmet frontmatter={frontmatter} />
      <TemplateDiv>
        <H1>{title}</H1>
        <div className="post__content">
          <PostHtml dangerouslySetInnerHTML={{ __html: html }} />
          <PostNavigate
            next={next && next.frontmatter || undefined}
            prev={prev && prev.frontmatter || undefined}
          />
          <DiscussionEmbed {...disqusConfig} />
        </div>
      </TemplateDiv>
    </BlogLayout>
  )
}

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.object,
    prev: PropTypes.object,
    pathSlug: PropTypes.string,
  }).isRequired,
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
        date
        keywords
        description
        image {
          childImageSharp {
            fluid(maxWidth: 786, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Template
