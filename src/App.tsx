import { injectGlobal } from 'emotion'
import { withTheme } from 'emotion-theming'
import React from 'react'
import clenchingFist from 'resources/images/wrist/clenching-fist.mp4'
import clenchingFistFoto from 'resources/images/wrist/clenching-fist-foto.jpg'
import radioulnarDeviation from 'resources/images/wrist/radioulnar-deviation.mp4'
import radioulnarDeviationFoto from 'resources/images/wrist/radioulnar-deviation-foto.jpg'
import dartThrowing from 'resources/images/wrist/dart-throwing.mp4'
import dartThrowingFoto from 'resources/images/wrist/dart-throwing-foto.jpg'
import pronoSupination from 'resources/images/wrist/prono-supination.mp4'
// import pronoSupinationFoto from 'resources/images/wrist/prono-supination-foto.jpg'
import ScapulothoracicJointRound from 'resources/images/shoulder/scapulothoracic-joint-round.mp4'
import ScapulothoracicJointRoundFoto from 'resources/images/shoulder/scapulothoracic-joint-round-foto.jpg'
import ScapulothoracicJointUp from 'resources/images/shoulder/scapulothoracic-joint-up.mp4'
import ScapulothoracicJointUpFoto from 'resources/images/shoulder/scapulothoracic-joint-up-foto.jpg'
import hip from 'resources/images/hip/hip.mp4'
import foot from 'resources/images/foot/foot.mp4'
import knee from 'resources/images/knee/knee.mp4'
import { Router, Route, Switch } from 'react-router-dom'
import { history, INSTRUCTIONS } from 'config'
import { GifPage, MultipleJointsPage, Main, LoginPage } from 'components/pages'
import { PrivateRoute } from 'components/atoms'

injectGlobal`
  @font-face {
    font-family: 'Inter', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap');
  }

  body {
    margin: 0;
  }
  
  *{
    box-sizing: border-box;
    font-family: Inter;
  }
`
const wristJoints = [
  {
    name: 'Clenching fist',
    href: 'wrist/clenching-fist',
    src: clenchingFistFoto,
  },
  {
    name: 'Radioulnar deviation',
    href: 'wrist/radioulnar-deviation',
    src: radioulnarDeviationFoto,
  },
  {
    name: 'Dart-throwing',
    href: 'wrist/dart-throwing',
    src: dartThrowingFoto,
  },
  //Unnecessary at this point, but will be used in the future
  // {
  //   name: 'Prono-supination',
  //   href: 'wrist/prono-supination',
  //   src: pronoSupinationFoto,
  // },
]
const shoulderJoints = [
  {
    name: 'Scapulothoracic joint UP',
    href: 'shoulder/scapulothoracic-joint-up',
    src: ScapulothoracicJointUpFoto,
  },
  {
    name: 'Scapulothoracic joint ROUND',
    href: 'shoulder/scapulothoracic-joint-round',
    src: ScapulothoracicJointRoundFoto,
  },
]
const AppComponent: React.FC = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <PrivateRoute
            path="/wrist/clenching-fist"
            component={() => (
              <GifPage
                gifSrc={clenchingFist}
                id={INSTRUCTIONS.CLENCHING_FIST}
              />
            )}
          />
          <PrivateRoute
            path="/wrist/radioulnar-deviation"
            component={() => (
              <GifPage
                gifSrc={radioulnarDeviation}
                id={INSTRUCTIONS.RADIOULNAR_DEVIATION}
              />
            )}
          />
          <PrivateRoute
            path="/wrist/dart-throwing"
            component={() => (
              <GifPage gifSrc={dartThrowing} id={INSTRUCTIONS.DART_THROWING} />
            )}
          />
          <PrivateRoute
            path="/wrist/prono-supination"
            component={() => (
              <GifPage
                gifSrc={pronoSupination}
                id={INSTRUCTIONS.PRONO_SUPINATION}
              />
            )}
          />
          <PrivateRoute
            path="/wrist"
            component={() => <MultipleJointsPage joints={wristJoints} />}
          />
          <PrivateRoute
            path="/foot"
            component={() => <GifPage gifSrc={foot} id={INSTRUCTIONS.FOOT} />}
          />
          <PrivateRoute
            path="/knee"
            component={() => <GifPage gifSrc={knee} id={INSTRUCTIONS.KNEE} />}
          />
          <PrivateRoute
            path="/shoulder/scapulothoracic-joint-up"
            component={() => (
              <GifPage
                gifSrc={ScapulothoracicJointUp}
                id={INSTRUCTIONS.SCAPULOTHORACIC_UP}
              />
            )}
          />
          <PrivateRoute
            path="/shoulder/scapulothoracic-joint-round"
            component={() => (
              <GifPage
                gifSrc={ScapulothoracicJointRound}
                id={INSTRUCTIONS.SCAPULOTHORACIC_ROUND}
              />
            )}
          />
          <PrivateRoute
            path="/shoulder"
            component={() => <MultipleJointsPage joints={shoulderJoints} />}
          />
          <PrivateRoute
            path="/hip"
            component={() => <GifPage gifSrc={hip} id={INSTRUCTIONS.HIP} />}
          />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  )
}

export default withTheme(AppComponent)
