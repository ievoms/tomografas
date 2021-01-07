import { createBrowserHistory } from 'history'
interface Config {
  [key: string]: string
}

export const config: Config = {
  APP_URL:
    process.env.REACT_APP_APP_URL ||
    process.env.PUBLIC_URL ||
    'http://localhost:3000',
  API_URL:
    process.env.REACT_APP_API_URL ||
    process.env.API_URL ||
    'https://cat-fact.herokuapp.com/',
  BASE_URL: process.env.REACT_APP_BASE_URL || process.env.PUBLIC_URL || '/',
}

export const history = createBrowserHistory()
export const INSTRUCTIONS = {
  CLENCHING_FIST: 'Wrist - Clenching fist',
  RADIOULNAR_DEVIATION: 'Wrist - Radioulnar deviation',
  PRONO_SUPINATION: 'Wrist - Prono supination',
  DART_THROWING: 'Wrist - Dart-throwing',
  SCAPULOTHORACIC_UP: 'Scapulothoracic joint UP',
  SCAPULOTHORACIC_ROUND: 'Scapulothoracic joint ROUND',
  FOOT: 'Foot',
  KNEE: 'Knee',
  HIP: 'Hip',
}
