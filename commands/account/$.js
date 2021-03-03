import got from 'got'
import { identity } from '@cto.ai/ops-ctrl-account'

export const describe = 'Manage your account settings.'

export const MSG_NO_TEAMS = 'According to the API, this user does not belong to any teams.'

export async function userTeams (api, tokens) {
  try {
    const { id } = identity(tokens)
    const response = await got(`${api}/private/teams?userId=${id}`, {
      headers: { Authorization: tokens.accessToken }
    }).json()
    if (response.error) throw Error(response.error)
    return response.data
  } catch (err) {
    if (err && err.response && err.response.statusCode === 401) {
      const err = Error('Unauthorized')
      err.code = 'ERR_UNAUTHORIZED'
      throw err
    }
    throw err
  }
}
