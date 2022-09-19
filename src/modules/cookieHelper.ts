import Cookies from 'universal-cookie'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const COOKIE_DOMAIN = publicRuntimeConfig.CONF_COOKIE_DOMAIN || 'weirdbears.io'
export const COOKIE_OPT = { domain: COOKIE_DOMAIN, path: '/' }

export const COOKIE_KEYS = {
    selectedKlaytnAddress: 'selectedKlaytnAddress'
}
export const getCookie = (key) => {
    const cookies = new Cookies();
    return cookies.get(key)
}
export const removeCookie = (key) => {
    const cookies = new Cookies();
    return cookies.remove(key, COOKIE_OPT)
}
export const setCookie = (key, value) => {
    const cookies = new Cookies();
    return cookies.set(key, value, COOKIE_OPT)
}