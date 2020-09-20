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
    <Column>
      <ImageButtonsContainer justify="space-between">
        {joints.map(joint => (
          <Column>
            <BodyPartButton
              href={joint.href}
              src={joint.src}
              name={joint.name}
            />
          </Column>
        ))}
      </ImageButtonsContainer>
    </Column>
  </Content>
)

const ImageButtonsContainer = styled(Row)`
  padding: 20px 50px 20px 0;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`

const Content = styled(Column)`
  width: 100%;
`
