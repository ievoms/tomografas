import styled from '@emotion/styled'

interface FlexProps {
  align?: 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end'
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  width?: string
}

export const Column = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || ''};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
`

export const Row = styled(Column)`
  flex-direction: row;
`
