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

      <Container>
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
`
const Video = styled.video`
  height: 500px;
`
