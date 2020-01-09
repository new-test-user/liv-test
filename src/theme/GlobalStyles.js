import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { fonts } from 'assets/fonts'

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize};
  ${fonts};

  body {
    margin: 0;
    padding: 0;
    font-family: ${p => p.theme.SFProRoundedRegular};
    background-color: ${p => p.theme.lightGrey};
    color: ${p => p.theme.lightBlack};
  }

  * {
    box-sizing: border-box;
  }
`
