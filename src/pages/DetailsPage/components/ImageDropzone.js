import React, { useState, useEffect } from 'react'
import uuid from 'uuid'
import { useDropzone } from 'react-dropzone'
import styled, { css } from 'styled-components'
import * as theme from 'theme'
import { CloseButton } from 'components'
import { UploadIcon } from 'components/icons'

import { respondTo } from 'theme/respondTo'

const getColor = props => {
  if (props.isDragAccept) {
    return theme.green
  }
  if (props.isDragReject) {
    return theme.red
  }
  if (props.isDragActive) {
    return theme.lightBlue
  }
  return theme.primary
}

const DropzoneWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`

const DropzoneItem = styled.div`
  min-width: 100px;
  width: 33.333%;
  max-width: 112px;
  height: 112px;
  padding: 4px;
  margin: 0;

  ${respondTo.xs`
		width: 25%;
	`}
`

const DropzoneItemCommonStyle = css`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`

const DropzoneArea = styled.div`
  ${DropzoneItemCommonStyle};

  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid ${props => getColor(props)};
  outline: none;
  transition: border 0.24s ease-in-out;
`

const Thumb = styled.div`
  ${DropzoneItemCommonStyle};

  display: flex;
  justify-content: flex-end;
  padding: 8px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${p => p.url});
`

const ImageDropzone = ({ input }) => {
  const [previews, setPreviews] = useState(input.value)

  const onDrop = acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader()

      reader.onload = () => {
        setPreviews(previews => [
          ...previews,
          { url: reader.result, id: uuid() },
        ])
      }

      reader.readAsDataURL(file)
    })
  }

  const removeFile = id =>
    setPreviews(previews => previews.filter(preview => preview.id !== id))

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    onDrop,
  })

  useEffect(() => {
    input.onChange(previews)
  }, [input, previews])

  const previewsList = previews.map(({ id, url }) => {
    return (
      <DropzoneItem key={id}>
        <Thumb url={url}>
          <CloseButton onClick={() => removeFile(id)} variant="outlined" />
        </Thumb>
      </DropzoneItem>
    )
  })

  return (
    <DropzoneWrapper>
      <DropzoneItem>
        <DropzoneArea
          {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
        >
          <input {...getInputProps()} />
          <UploadIcon />
        </DropzoneArea>
      </DropzoneItem>
      {previewsList}
    </DropzoneWrapper>
  )
}

export default ImageDropzone
