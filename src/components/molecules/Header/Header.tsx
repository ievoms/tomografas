import React from 'react'
import styled from '@emotion/styled'
import { Column, Row, Text } from 'components/atoms'
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
  border-bottom: 2px solid lightgrey;
  margin-bottom: 50px;
`

const TextContainer = styled(Row)`
  max-width: 1200px;
  width: 100%;
`
