import styled, { css } from 'styled-components'

const sizes = {
    giant: 1150,
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
}, {});


export const Container = styled.div`
    ${media.phone`padding: 0 10px;`}
    ${media.tablet`padding: 0 20px;`}
    ${media.desktop`padding: 0 30px;`}
    ${media.giant`max-width: 1000px; margin: 0 auto;`}
`;




