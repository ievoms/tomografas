import React from 'react'
import { BodyPartButton, Header } from 'components/molecules'
import { Column, Row } from 'components/atoms'
import wrist from 'resources/images/wrist/hand.png'
import foot from 'resources/images/foot/foot.png'
import knee from 'resources/images/knee/knee.jpg'
import shoulder from 'resources/images/shoulder/shoulder.jpg'
import hip from 'resources/images/hip/hip.jpg'
import styled from '@emotion/styled'

export const Main: React.FC = () => (
  <Column align="center" justify="center" width="100%">
    <Header text="Pasirinkite tyrimo vietą" />
    <ImageButtonsContainer justify="space-between">
      <BodyPartButton href="wrist" src={wrist} />
      <BodyPartButton href="foot" src={foot} />
      <BodyPartButton href="knee" src={knee} />
      <BodyPartButton href="shoulder" src={shoulder} />
      <BodyPartButton href="hip" src={hip} />
    </ImageButtonsContainer>
  </Column>
)

const ImageButtonsContainer = styled(Row)`
  padding: 20px 50px 20px 0;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`
