import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import actions from 'redux/actions'

import DetailsPageForm from './components/DetailsPageForm'
import ModalOpenButton from './components/ModalOpenButton'
import { Modal } from 'components'

const Wrapper = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

const MainPage = ({ isModalOpen, dispatch }) => {
  const openModal = () =>
    dispatch({
      type: actions.CHANGE_DETAILS_MODAL_VISIBILITY,
      payload: true,
    })

  const closeModal = () =>
    dispatch({
      type: actions.CHANGE_DETAILS_MODAL_VISIBILITY,
      payload: false,
    })

  return (
    <Wrapper>
      <ModalOpenButton title="Change details" onClick={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Popup title">
        <DetailsPageForm />
      </Modal>
    </Wrapper>
  )
}

const mapStateToProps = ({ details: { isModalOpen } }) => ({ isModalOpen })

export default connect(mapStateToProps)(MainPage)
