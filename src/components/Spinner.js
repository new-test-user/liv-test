import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SpinnerWrapper = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid;
  animation: spin 1s infinite linear;
  border-radius: 50%;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`

export const Spinner = ({ width, height }) => (
  <SpinnerWrapper {...{ width, height }} />
)

Spinner.defaultProps = {
  width: 24,
  height: 24,
}

Spinner.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
