import React from 'react'
import styled from '@emotion/styled'
import { Row, Text } from 'components/atoms'
import { BackButton } from '../BackButton'

interface HeaderProps {
  text: string
  showButton?: boolean
}

export const Header: React.FC<HeaderProps> = ({ text, showButton }) => (
  <Container justify="center">
    <TextContainer align="center">
      {showButton && <BackButton />}
      <Text>{text}</Text>
    </TextContainer>
  </Container>
)

const Container = styled(Row)`
  width: 100%;
  margin-bottom: 50px;
  box-shadow: 0 8px 6px -6px lightgrey;
`

const TextContainer = styled(Row)`
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
