import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { respondTo } from 'theme/respondTo'

const LayoutWrapper = styled.div`
  display: flex;
  min-width: 320px;
`

const Content = styled.div`
  flex: 1 1;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  padding: 10px;

  ${respondTo.sm`
		padding: 20px;
	`}
`

export const Layout = ({ children }) => (
  <LayoutWrapper>
    <Content>{children}</Content>
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
