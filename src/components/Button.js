import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Spinner } from './Spinner'

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 4px;
`

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 56px;
  padding: 16px;
  border-radius: 28px;
  outline: none;
  user-select: none;
  border: none;
  cursor: pointer;

  font-size: 20px;
  line-height: 1.2;
  font-family: ${p => p.theme.SFProRoundedSemibold};
  color: ${p => p.theme.white};
  background: ${p => p.theme.primary};
  transition: box-shadow 120ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: ${p => p.theme.buttonBoxShadow};
  }
`

export const Button = ({ isSpinning, children, ...props }) => {
  return (
    <ButtonWrapper>
      <ButtonStyled disabled={isSpinning} {...props}>
        {isSpinning && <Spinner />}
        {!isSpinning && children}
      </ButtonStyled>
    </ButtonWrapper>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  spinning: PropTypes.bool,
}
