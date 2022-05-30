import urljoin from 'url-join'
import getConfig from 'next/config'
import querystring from 'querystring'
import {isEmpty, omitBy, isNil} from 'lodash'
const { publicRuntimeConfig } = getConfig()

export const SERVER_URL = publicRuntimeConfig.CONF_SERVER_URL || 'https://api.betterworldapp.io'

const apiV1 = (path) => urljoin(`${SERVER_URL}/api/v1`, path)

// null 일경우에는 파라메터 제거
export const urlParams = (obj, nullable?) => {
  if (nullable) {
    return isEmpty(obj) ? '' : '?' + querystring.stringify(obj)
  }
  const nilRemoved = omitBy(obj, isNil)
  if (isEmpty(nilRemoved)) {
    return ''
  }
  return '?' + querystring.stringify(nilRemoved)
}

const apis = {
}

export default apis
