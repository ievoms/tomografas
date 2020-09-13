import React from 'react'
import { Column } from 'components/atoms'
import { Header, BackButton } from 'components/molecules'
import styled from '@emotion/styled'

interface GifPageProps {
  gifSrc: any
}
export const GifPage: React.FC<GifPageProps> = ({ gifSrc }) => {
  return (
    <Column align="center">
      <Header text="Sekite instrukcijas" />
      <Container>
        <BackButton />
        <Gif src={gifSrc}></Gif>
      </Container>
    </Column>
  )
}
const Container = styled(Column)`
  max-width: 1200px;
  width: 100%;
`
const Gif = styled.img`
  height: 500px;
`
