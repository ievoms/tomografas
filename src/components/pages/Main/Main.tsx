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
    <Header text="Pasirinkite tyrimo vietą" showButton={false} />
    <ImageButtonsContainer>
      <Button href="wrist" src={wrist} />
      <Button href="foot" src={foot} />
      <Button href="knee" src={knee} />
      <Button href="shoulder" src={shoulder} />
      <Button href="hip" src={hip} />
    </ImageButtonsContainer>
  </Column>
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
    justify-content: center;
  }
  @media (max-width: 800px) {
    max-width: 600px;
  }
`
const Button = styled(BodyPartButton)`
  margin-right: 80px;
  margin-bottom: 80px;
  @media (max-width: 1000px) {
    /* margin-right: 40px; */
    margin-right: 40px;
    margin-bottom: 40px;
  }
`
