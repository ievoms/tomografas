import { injectGlobal } from 'emotion'
import { withTheme } from 'emotion-theming'
import React from 'react'
import clenchingFist from 'resources/images/wrist/clenching-fist.gif'
import clenchingFistFoto from 'resources/images/wrist/clenching-fist-foto.jpg'
import radioulnarDeviation from 'resources/images/wrist/radioulnar-deviation.gif'
import radioulnarDeviationFoto from 'resources/images/wrist/radioulnar-deviation-foto.jpg'
import dartThrowing from 'resources/images/wrist/dart-throwing.gif'
import dartThrowingFoto from 'resources/images/wrist/dart-throwing-foto.jpg'
import pronoSupination from 'resources/images/wrist/prono-supination.gif'
import pronoSupinationFoto from 'resources/images/wrist/prono-supination-foto.jpg'
import ScapulothoracicJointRound from 'resources/images/shoulder/scapulothoracic-joint-round.gif'
import ScapulothoracicJointRoundFoto from 'resources/images/shoulder/scapulothoracic-joint-round-foto.jpg'
import ScapulothoracicJointUp from 'resources/images/shoulder/scapulothoracic-joint-up.gif'
import ScapulothoracicJointUpFoto from 'resources/images/shoulder/scapulothoracic-joint-up-foto.jpg'
import hip from 'resources/images/hip/hip.gif'
import foot from 'resources/images/foot/foot.gif'
import knee from 'resources/images/knee/knee.gif'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { GifPage, MultipleJointsPage, Main } from 'components/pages'

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
  {
    name: 'Prono-supination',
    href: 'wrist/prono-supination',
    src: pronoSupinationFoto,
  },
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
  const history = createBrowserHistory()
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route
            path="/wrist/clenching-fist"
            component={() => <GifPage gifSrc={clenchingFist} />}
          />
          <Route
            path="/wrist/radioulnar-deviation"
            component={() => <GifPage gifSrc={radioulnarDeviation} />}
          />
          <Route
            path="/wrist/dart-throwing"
            component={() => <GifPage gifSrc={dartThrowing} />}
          />
          <Route
            path="/wrist/prono-supination"
            component={() => <GifPage gifSrc={pronoSupination} />}
          />
          <Route
            path="/wrist"
            component={() => <MultipleJointsPage joints={wristJoints} />}
          />
          <Route path="/foot" component={() => <GifPage gifSrc={foot} />} />
          <Route path="/knee" component={() => <GifPage gifSrc={knee} />} />
          <Route
            path="/shoulder/scapulothoracic-joint-up"
            component={() => <GifPage gifSrc={ScapulothoracicJointUp} />}
          />
          <Route
            path="/shoulder/scapulothoracic-joint-round"
            component={() => <GifPage gifSrc={ScapulothoracicJointRound} />}
          />
          <Route
            path="/shoulder"
            component={() => <MultipleJointsPage joints={shoulderJoints} />}
          />
          <Route path="/hip" component={() => <GifPage gifSrc={hip} />} />
          <Route component={Main} />
        </Switch>
      </Router>
    </div>
  )
}

export default withTheme(AppComponent)
