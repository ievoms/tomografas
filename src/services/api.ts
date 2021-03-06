import { config } from 'config'

const LOGIN_ENDPOINT = 'login'
const REPORT_ENDPOINT = 'report'

export const login = async (data: { username: string; password: string }) => {
  const response = await fetch(`${config.API_URL}${LOGIN_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  })
  return response.json()
}

export const report = async (data: {
  instruction_id: string
  text: string
}) => {
  const response = await fetch(`${config.API_URL}${REPORT_ENDPOINT}`, {
    method: 'POST',
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  })
  return response.json()
}
