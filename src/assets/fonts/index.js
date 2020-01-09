import { css } from 'styled-components'

import SFProRoundedRegularWoff2 from './SFProRounded-Regular.woff2'
import SFProRoundedRegularWoff from './SFProRounded-Regular.woff'

import SFProRoundedBlackWoff2 from './SFProRounded-Black.woff2'
import SFProRoundedBlackWoff from './SFProRounded-Black.woff'

import SFProRoundedSemiboldWoff2 from './SFProRounded-Semibold.woff2'
import SFProRoundedSemiboldWoff from './SFProRounded-Semibold.woff'

export const fonts = css`
  @font-face {
    font-family: 'SF Pro Rounded Regular';
    src: local('SF Pro Rounded Regular'), local('SFProRoundedRegular'),
      url(${SFProRoundedRegularWoff2}) format('woff2'),
      url(${SFProRoundedRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Rounded Semibold';
    src: local('SF Pro Rounded Semibold'), local('SFProRoundedSemibold'),
      url(${SFProRoundedSemiboldWoff2}) format('woff2'),
      url(${SFProRoundedSemiboldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro Rounded Black';
    src: local('SF Pro Rounded Black'), local('SFProRoundedBlack'),
      url(${SFProRoundedBlackWoff2}) format('woff2'),
      url(${SFProRoundedBlackWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`
