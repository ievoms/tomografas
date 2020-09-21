import React from 'react'
import { BodyPartButton, Header } from 'components/molecules'
import styled from '@emotion/styled'
import { Column, Row } from 'components/atoms'

interface MultipleJointsPageProps {
  joints: { name: string; href: string; src: any }[]
}
export const MultipleJointsPage: React.FC<MultipleJointsPageProps> = ({
  joints,
}) => (
  <Content align="center" justify="center" width="100%">
    <Header text="Pasirinkite tyrimo vietą" showButton={true} />
    <ImageButtonsContainer>
      {joints.map(joint => (
        <Button href={joint.href} src={joint.src} name={joint.name} />
      ))}
    </ImageButtonsContainer>
  </Content>
)

const ImageButtonsContainer = styled(Row)`
  padding: 20px 50px 20px 0;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  @media (max-width: 1250px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    max-width: 800px;
  }
  @media (max-width: 800px) {
    max-width: 600px;
    justify-content: center;
  }
`

const Content = styled(Column)`
  width: 100%;
`
const Button = styled(BodyPartButton)`
  margin-right: 80px;
  @media (max-width: 1000px) {
    margin-right: 30px;
  }
`
