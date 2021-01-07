import React, { useState } from 'react'
import { Column } from 'components/atoms'
import { Header, Modal, ChangeSpeedModal } from 'components/molecules'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'
import reporticon from 'resources/images/report.png'
import speed from 'resources/images/speed.png'
// import { Media, Player, controls, withMediaProps, utils } from 'react-media-player'
// const { PlayPause, MuteUnmute } = controls

interface GifPageProps {
  gifSrc: any
  id: string
}
export const GifPage: React.FC<GifPageProps> = ({ gifSrc, id }) => {
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false)
  const [changeSpeedModalIsOpen, setChangeSpeedModalIsOpen] = useState(false)
  const [videoLength, setvideoLength] = useState(0)
  const [playbackspeed, setplaybackspeed] = useState('1')
  const [playbackIsChanging, setplaybackIsChanging] = useState(true)
  console.log(
    parseFloat(playbackspeed),
    videoLength / parseFloat(playbackspeed)
  )

  return (
    <Column align="center">
      <Header text="Sekite instrukcijas" showButton={true} />
      <Container justify="center" width="100%" align="center">
        <Text>
          Judesio trukmė:{' '}
          <Span>{Math.round(videoLength / parseFloat(playbackspeed))}</Span>
        </Text>
        <Video
          url={gifSrc}
          playing={playbackIsChanging}
          loop={true}
          playbackRate={playbackspeed}
          width="1200px"
          height="85vh"
          onDuration={(duration: any) => {
            setvideoLength(duration)
            console.log(duration)
          }}
        />
      </Container>
      <ChangeSpeed onClick={() => setChangeSpeedModalIsOpen(true)}>
        <Icon src={speed} />
        <ButtonText className="text">Redaguoti spartą</ButtonText>
      </ChangeSpeed>
      <ReportButton onClick={() => setReportModalIsOpen(true)}>
        <Icon src={reporticon} />
        <ButtonText className="text">Pranešti</ButtonText>
      </ReportButton>
      <Modal
        modalIsOpen={reportModalIsOpen}
        setModalIsOpen={setReportModalIsOpen}
        id={id}
      />
      <ChangeSpeedModal
        modalIsOpen={changeSpeedModalIsOpen}
        setModalIsOpen={setChangeSpeedModalIsOpen}
        setplaybackspeed={setplaybackspeed}
        setplaybackIsChanging={setplaybackIsChanging}
      />
    </Column>
  )
}
const Span = styled.span`
  font-weight: 600;
`
const Text = styled.div`
  align-self: flex-start;
`

const Container = styled(Column)`
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1250px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    max-width: 800px;
  }
  @media (max-width: 800px) {
    max-width: 600px;
  }
`
const Video = styled(ReactPlayer)`
  height: 86vh;
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1250px) {
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    max-width: 800px;
  }
  @media (max-width: 800px) {
    max-width: 600px;
  }
`
const ButtonText = styled.div`
  display: none;
  padding-left: 10px;
`
const ReportButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    .text {
      display: flex;
    }
  }
`
const Icon = styled.img`
  height: 20px;
  width: 20px;
`

const ChangeSpeed = styled.button`
  position: absolute;
  bottom: 60px;
  right: 20px;
  border: none;
  background-color: transparent;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    .text {
      display: flex;
    }
  }
`
