/* Styled components */
/* Define this in separate file, like media.js */
export const largeScreen = '(min-width: 950px)';
/* Include the file in each component that needs to adapt based on a media query */


import { css } from 'styled-components'

const sizes = {
    giant: 1170,
    desktop: 950,
    tablet: 750,
    phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
    return accumulator
}, {})