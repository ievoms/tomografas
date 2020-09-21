import React from 'react'
import styled from '@emotion/styled'
import { Text } from 'components/atoms'

interface BodyPartButtonProps {
  href: string
  src: any
  name?: string
  className?: string
}
export const BodyPartButton: React.FC<BodyPartButtonProps> = ({
  href,
  src,
  name,
  className,
}) => (
  <Button
    className={className}
    onClick={() => (window.location.pathname = `/${href}/`)}
    name={name}>
    <Img alt="href" height={200} src={src} />
    {name && <StyledText>{name}</StyledText>}
  </Button>
)
const StyledText = styled(Text)`
  padding-top: 5px;
`
const Button = styled.button<{ name?: string }>`
  border: none;
  box-shadow: 0px 3px 11px rgba(128, 128, 128, 0.2);
  border-radius: 10px;
  width: 300px;
  height: 200px;
  margin-bottom: ${({ name }) => (name ? '70px' : '50px')};
  padding: 0;
  cursor: pointer;
`
const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
