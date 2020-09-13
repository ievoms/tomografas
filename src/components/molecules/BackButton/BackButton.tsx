import back from 'resources/images/back.svg'
import React from 'react'
import styled from '@emotion/styled'

export const BackButton: React.FC = () => (
  <Button onClick={() => window.history.back()}>
    <Icon alt="back" height={50} src={back} />
    Sugrįžti
  </Button>
)

const Icon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  margin-bottom: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  justify-items: flex-start;
  justify-self: start;
`
