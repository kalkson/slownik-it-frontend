import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  padding: 0 25px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0 40px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 0 100px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 0 160px;
  }
`

export default Container
