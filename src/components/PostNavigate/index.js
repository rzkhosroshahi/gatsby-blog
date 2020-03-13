import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { mediumUp } from "../../style/breakpoints"

const Div = styled("div")`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: calc(1 * var(--base-line));
  margin: var(--base-line) 0;
`
const Next = styled("div")`
  display: flex;
  justify-content: flex-end;
  min-width: 50%;

  @media ${mediumUp} {
    min-width: 50%;
  }
`
const Prev = styled("div")`
  display: flex;
  justify-content: flex-start;
  min-width: 50%;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.linkColor};
  border-bottom: 0.0625rem solid #e0e0e0;

  &:hover,
  &:focus {
    color: ${props => props.theme.linkHoverColor};
    border-color: ${props => props.theme.linkHoverColor};
  }
`

export const PostNavigate = ({ next, prev }) => {
  const { path: nextPath } = next
  const { path: prevPath } = prev

  return (
    <Div className="PostNavigate">
      {prevPath && (
        <Prev>
          <StyledLink to={prevPath}>پست قبلی</StyledLink>
        </Prev>
      )}
      {nextPath && (
        <Next>
          <StyledLink to={nextPath}>پست بعدی</StyledLink>
        </Next>
      )}
    </Div>
  )
}

PostNavigate.propTypes = {
  next: PropTypes.shape({
    path: PropTypes.string,
  }),
  prev: PropTypes.shape({
    path: PropTypes.string,
  }),
}
PostNavigate.defaultProps = {
  next: {
    path: null,
  },
  prev: {
    path: null,
  },
}
