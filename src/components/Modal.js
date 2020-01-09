import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import { CloseButton } from './CloseButton'
import { respondTo } from 'theme/respondTo'

ReactModal.setAppElement(document.getElementById('root'))

const modalInlineStyles = {
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0,0,0,.6)',
  },
}

const StyledModal = styled(ReactModal).attrs({
  tabIndex: -1,
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 375px;
  z-index: 1000;
  outline: none;

  ${respondTo.xs`
		max-width: 464px;
	`}
`

const Inner = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  border-radius: 28px 28px 0 0;
  border-bottom: 1px solid ${p => p.theme.lightGrey};
  background: ${p => p.theme.white};
`

const Title = styled.h5`
  width: 100%;
  margin: 0 0 0 24px;
  padding: 0 4px;
  text-align: center;
  font-size: 17px;
  line-height: 1.29;
  font-family: ${p => p.theme.SFProRoundedSemibold};
  color: ${p => p.theme.lightBlack};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Content = styled.div`
  padding: 20px 12px;
  background: ${p => p.theme.white};

  ${respondTo.xs`
    padding: 20px;
		border-radius: 0 0 28px 28px;
	`}
`

export const Modal = ({
  className,
  isOpen,
  title,
  onClose,
  children,
  ...props
}) => (
  <StyledModal
    className={className}
    isOpen={isOpen}
    onRequestClose={onClose}
    style={modalInlineStyles}
    {...props}
  >
    <Inner>
      <Header>
        <Title>{title}</Title>
        <CloseButton onClick={onClose} />
      </Header>
      <Content>{children}</Content>
    </Inner>
  </StyledModal>
)

Modal.defaultProps = {
  onClose: () => console.log('Modal onClose callback!'),
}

Modal.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element,
}
