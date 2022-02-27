import Router from "next/router"

export const moveTo = (url) => {
    Router.replace(url)
}