import React from 'react'
import styled from '@emotion/styled'
import { Row, Text } from 'components/atoms'

interface HeaderProps {
  text: string
}
export const Header: React.FC<HeaderProps> = ({ text }) => (
  <Container justify="center">
    <TextContainer>
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
