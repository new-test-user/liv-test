import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { CloseIcon } from './icons'

const ButtonOutlined = css`
  border-color: ${p => p.theme.white};
  background: ${p => p.theme.whiteTrasparent};
`

const modifyButtonStyles = variant => {
  switch (variant) {
    case 'outlined':
      return ButtonOutlined

    default:
      return
  }
}

const CloseButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border: 2px solid ${p => p.theme.lightGrey};
  border-radius: 50%;
  outline: none;
  background: ${p => p.theme.lightGrey};
  cursor: pointer;

  ${p => modifyButtonStyles(p.variant)}
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CloseButton = ({ onClick, variant }) => {
  return (
    <CloseButtonStyled onClick={onClick} variant={variant}>
      <IconWrapper>
        <CloseIcon />
      </IconWrapper>
    </CloseButtonStyled>
  )
}

CloseButton.defaultProps = {
  onClick: () => console.log('onClose icon click!'),
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.string,
}
