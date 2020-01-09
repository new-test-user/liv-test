import React from 'react'
import * as theme from 'theme'

const UploadIcon = ({ color, backgroundColor, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <path
      d="M24 0C20.429 0 16.8525 1.33313 14.1279 4.01008C11.8155 6.28205 10.4836 9.1543 10.1337 12.1159C4.44776 12.6231 0 17.3136 0 23.0323C0 29.0895 4.9978 34 11.1628 34H38.5116C43.7682 34 48 29.8421 48 24.6774C48 19.5127 43.7682 15.3548 38.5116 15.3548H37.8488C38.3407 11.3218 37.0047 7.10507 33.8546 4.01008C31.1302 1.33313 27.571 0 24 0Z"
      fill={backgroundColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.0646 16.8866L19.6252 20.326C19.0394 20.9118 18.0897 20.9118 17.5039 20.326C16.9181 19.7402 16.9181 18.7904 17.5039 18.2047L24.5646 11.144L31.6252 18.2047C32.211 18.7904 32.211 19.7402 31.6252 20.326C31.0394 20.9118 30.0897 20.9118 29.5039 20.326L26.0646 16.8866V28.7731C26.0646 29.6016 25.393 30.2731 24.5646 30.2731C23.7361 30.2731 23.0646 29.6016 23.0646 28.7731V16.8866Z"
      fill={color}
    />
  </svg>
)

UploadIcon.defaultProps = {
  color: theme.grey,
  backgroundColor: theme.primary,
  width: 48,
  height: 34,
}

export default UploadIcon
