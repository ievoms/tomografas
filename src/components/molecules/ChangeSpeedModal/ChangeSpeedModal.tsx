import React, { useState } from 'react'
import close from 'resources/images/close.png'
import { Column } from 'components/atoms'
import styled from '@emotion/styled'

interface ModalProps {
  modalIsOpen: boolean
  setModalIsOpen: (value: boolean) => void
  setplaybackspeed: (value: string) => void
  setplaybackIsChanging: (value: boolean) => void
}
export const ChangeSpeedModal: React.FC<ModalProps> = ({
  modalIsOpen,
  setModalIsOpen,
  setplaybackspeed,
  setplaybackIsChanging,
}) => {
  const options = [
    0.1,
    0.2,
    0.3,
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1,
    1.1,
    1.2,
    1.3,
    1.4,
    1.5,
    1.6,
    1.7,
    1.8,
    1.9,
    2,
  ]

  return (
    <React.Fragment>
      <Overlay
        modalIsOpen={modalIsOpen}
        onClick={() => setModalIsOpen(false)}
      />
      <Container modalIsOpen={modalIsOpen}>
        <CloseButton onClick={() => setModalIsOpen(false)}>
          <Icon src={close} />
        </CloseButton>
        <div>Reguliuokite vaizdo įrašo atkūrimo spartą</div>
        <Select onChange={e => setplaybackspeed(e.target.value)}>
          {options.map(option => (
            <option>{option}</option>
          ))}
        </Select>
        <SubmitButton
          onClick={() => {
            setModalIsOpen(false)
            setplaybackIsChanging(true)
          }}>
          Išsaugoti
        </SubmitButton>
      </Container>
    </React.Fragment>
  )
}
const Select = styled.select`
  width: 100px;
  height: 25px;
  border: 1px solid lightgray;
  border-radius: 2px;
  margin-top: 20px;
`

const Overlay = styled.div<{ modalIsOpen: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: rgba(58, 58, 58, 0.5);
  position: absolute;
  display: ${({ modalIsOpen }) => (modalIsOpen ? 'block' : 'none')};
`

const Container = styled(Column)<{ modalIsOpen: boolean }>`
  display: ${({ modalIsOpen }) => (modalIsOpen ? 'flex' : 'none')};
  background-color: white;
  position: absolute;
  padding: 50px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  top: 50%;
  transform: translateY(-50%);
`

const Input = styled.textarea`
  height: 150px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin-top: 15px;
`
const CloseButton = styled.button`
  height: 30px;
  width: 30px;
  position: absolute;
  right: -15px;
  top: -15px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 16px;
  border: none;
  padding: 0;
`
const Icon = styled.img`
  height: 30px;
  width: 30px;
`
const SubmitButton = styled.button`
  width: 100px;
  align-self: flex-end;
  margin-top: 30px;
  padding: 8px;
  border-radius: 4px;
  color: white;
  background-color: #46992f;
  border: none;
`
