import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { BlogLayout } from "../components/BlogLayout"
import { mediumUp } from "../style/breakpoints"
import { H1 } from '../components/H1/index';
import { PostHtml } from '../components/PostHtml';
import { PostPageHelmet } from "../components/Helmet"

const AboutContainer = styled(PostHtml)`
  margin-top: calc(3 * var(--base-line));
  .post__content {
    margin-top: calc(1 * var(--base-line));
  }

  h1 {
    font-size: 1.618rem;
    line-height: calc(2 * var(--base-line));
    color: ${props => props.theme.textColor};
    @media ${mediumUp} {
      font-size: 2.618rem;
      line-height: calc(3 * var(--base-line));
    }
  }
`
const AboutTitle = styled(`div`)`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    border-radius: 100px;
    margin-left: 1rem;
  }
`;

const AboutTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { html } = markdownRemark
  return (
    <BlogLayout>
      <AboutContainer className="about">
        <PostPageHelmet frontmatter={frontmatter} />
        <AboutTitle>
          <img src="/Avatar.png" alt="avatar" />
          <H1>
            سلام! رضا خسروشاهی هستم
            <span role="img" aria-label="img">
              👋
            </span>
          </H1>
        </AboutTitle>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </AboutContainer>
    </BlogLayout>
  )
}

AboutTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
export default AboutTemplate
