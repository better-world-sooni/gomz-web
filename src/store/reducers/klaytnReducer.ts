import { COOKIE_KEYS, getCookie } from "src/modules/cookieHelper"

const initialState = {
  selectedAddress: getCookie(COOKIE_KEYS.selectedKlaytnAddress),
}

// action type
export const SELECTED_ADDRESS_KLAYTN = 'klaytn/SELECTED_ADDRESS' as const

// action function
export const selectedAddressAction = ({selectedAddress}) => ({ type: SELECTED_ADDRESS_KLAYTN, selectedAddress })

const f = (action, func) => func(action)

export const klaytnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ADDRESS_KLAYTN:
      return f(action, ({ selectedAddress }) => {
        return {
          ...state,
          selectedAddress
        }
      })
    default: {
      return state
    }
  }
}
