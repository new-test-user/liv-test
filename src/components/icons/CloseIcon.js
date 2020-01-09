import React from 'react'
import * as theme from 'theme'

const CloseIcon = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.1514 1.15134C0.649294 1.65344 0.649293 2.46751 1.1514 2.96961L4.18182 6.00003L1.15143 9.03042C0.649327 9.53252 0.649327 10.3466 1.15143 10.8487C1.65353 11.3508 2.4676 11.3508 2.9697 10.8487L6.00009 7.81831L9.03059 10.8488C9.53269 11.3509 10.3468 11.3509 10.8489 10.8488C11.351 10.3467 11.351 9.53263 10.8489 9.03053L7.81837 6.00003L10.8489 2.96951C11.351 2.4674 11.351 1.65333 10.8489 1.15123C10.3468 0.649129 9.53272 0.649128 9.03062 1.15123L6.00009 4.18176L2.96967 1.15134C2.46757 0.649234 1.6535 0.649235 1.1514 1.15134Z"
      fill={color}
    />
  </svg>
)

CloseIcon.defaultProps = {
  color: theme.primary,
  width: 12,
  height: 12,
}

export default CloseIcon
