import React from 'react'
import styled from 'styled-components'
import { Form, Field } from 'react-final-form'
import TextareaAutosize from 'react-textarea-autosize'
import { connect } from 'react-redux'

import actions from 'redux/actions'
import { Button } from 'components'
import ImageDropzone from './ImageDropzone'

import { respondTo } from 'theme/respondTo'

const TextAreaWrapper = styled.div`
  padding: 0 4px;
`

const Fieldset = styled.div`
  position: relative;
  transition: opacity 0.24s ease-in-out;
  opacity: ${p => (p.isLoading ? 0.5 : 1)};
  padding: 0 8px;

  &::after {
    content: '';
    display: ${p => (p.isLoading ? 'block' : 'none')};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${respondTo.xs`
    padding: 0;
	`}
`

const TextArea = styled(TextareaAutosize)`
  display: block;
  min-width: 100%;
  margin: 0 0 24px 0;
  padding: 0;
  font-size: 17px;
  line-height: 1.4;
  font-family: ${p => p.theme.SFProRoundedRegular};
  color: ${p => p.theme.lightBlack};
  border: none;
  outline: none;
  resize: none;
`

const MainPageForm = ({ details: { isLoading, files, notes }, dispatch }) => {
  const onSubmit = async values => {
    // TODO: add form validation
    dispatch({
      type: actions.CHANGE_DETAILS_REQUEST,
      payload: values,
    })
  }

  return (
    <Form initialValues={{ notes, files }} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Fieldset isLoading={isLoading}>
            <Field name="notes">
              {({ input }) => (
                <TextAreaWrapper>
                  <TextArea placeholder="Notes" {...input} />
                </TextAreaWrapper>
              )}
            </Field>
            <Field name="files" component={ImageDropzone} />
          </Fieldset>
          <Button isSpinning={isLoading} type="submit">
            Done
          </Button>
        </form>
      )}
    </Form>
  )
}

const mapStateToProps = ({ details }) => ({ details })

export default connect(mapStateToProps)(MainPageForm)
