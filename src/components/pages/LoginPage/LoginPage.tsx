import React from 'react'
import { Column, Row } from 'components/atoms'

import background from 'resources/images/background.jpg'
import icon from 'resources/images/icon.png'

import styled from '@emotion/styled'

export const LoginPage: React.FC = () => {
  return (
    <Container align="center" justify="center" width="100%">
      <Form>
        <LogoContainer>
          <Logo src={icon} />
        </LogoContainer>
        <Title>Prisijunkite</Title>
        <Label htmlFor="name">Vartotojo vardas</Label>
        <Input name="username"></Input>
        <Label htmlFor="password">Slaptažodis</Label>
        <Input name="password" type="password"></Input>
        <Button type="submit">Toliau</Button>
      </Form>
    </Container>
  )
}
const Title = styled.h1`
  margin-bottom: 20px;
`
const Logo = styled.img`
  height: 60px;
  width: 60px;
`
const LogoContainer = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 20px;
  border-radius: 50px;
`
const Container = styled(Column)`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`
const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(48, 49, 51, 0.1);
  min-width: 350px;
`
const Label = styled.label`
  padding: 10px 0;
  font-size: 14px;
  font-weight: 500;
`
const Input = styled.input`
  padding: 5px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  min-width: 200px;
`
const Button = styled.button`
  width: 100px;
  align-self: flex-end;
  margin-top: 30px;
  padding: 8px;
  border-radius: 4px;
  color: white;
  background-color: #46992f;
  border: none;
`
