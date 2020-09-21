import React from 'react'
import { Column } from 'components/atoms'
import { Header } from 'components/molecules'
import styled from '@emotion/styled'

interface GifPageProps {
  gifSrc: any
}
export const GifPage: React.FC<GifPageProps> = ({ gifSrc }) => {
  return (
    <Column align="center">
      <Header text="Sekite instrukcijas" showButton={true} />
      <Container justify="center" width="100%" align="center">
        <Video autoPlay loop muted>
          <source src={gifSrc} type="video/mp4" />
        </Video>
      </Container>
    </Column>
  )
}
const Container = styled(Column)`
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1250px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    max-width: 800px;
  }
  @media (max-width: 800px) {
    max-width: 600px;
  }
`
const Video = styled.video`
  height: 86vh;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1250px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    max-width: 800px;
  }
  @media (max-width: 800px) {
    max-width: 600px;
  }
`
