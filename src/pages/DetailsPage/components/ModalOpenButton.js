import React from 'react'
import styled from 'styled-components'

const Button = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  min-height: 100px;
  padding: 8px;
  border-radius: 10px;
  font-family: ${p => p.theme.SFProRoundedSemibold};
  background-color: ${p => p.theme.white};
  color: ${p => p.theme.lightBlack};
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);
  transition: box-shadow 300ms ease, transform 300ms ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 18px 0 rgba(0, 0, 0, 0.1);
  }
`

const ModalOpenButton = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>
}

export default ModalOpenButton
