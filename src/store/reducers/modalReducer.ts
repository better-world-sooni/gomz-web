const initialState = {
  mintingModal: {
    enabled: false
  },
  inviteModal: {
    enabled: false
  },
  alertModal: {
    enabled: false
  },
  rebirthModal: {
    enabled: false,
    index: null,
  },
  betterWorldModal: {
    enabled: false,
  },
}

// action type
export const MINTING_MODAL = 'modal/MINTING_MODAL' as const
export const ALERT_MODAL = 'modal/ALERT_MODAL' as const
export const INVITE_MODAL = 'modal/INVITE_MODAL' as const
export const REBIRTH_MODAL = 'modal/REBIRTH_MODAL' as const
export const BETTER_WORLD_MODAL = 'modal/BETTER_WORLD_MODAL' as const

// action function
export const mintingModalAction = ({enabled}) => ({ type: MINTING_MODAL, enabled })
export const alertModalAction = ({enabled}) => ({ type: ALERT_MODAL, enabled })
export const inviteModalAction = ({enabled}) => ({ type: INVITE_MODAL, enabled })
export const rebirthModalAction = ({enabled, index}) => ({ type: REBIRTH_MODAL, enabled, index })
export const betterWorldModalAction = ({enabled}) => ({ type: BETTER_WORLD_MODAL, enabled })

const f = (action, func) => func(action)

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MINTING_MODAL:
      return f(action, ({ enabled }) => {
        return {
          ...state,
          mintingModal: {
            enabled
          }
        }
      })
      case ALERT_MODAL:
      return f(action, ({ enabled }) => {
        return {
          ...state,
          alertModal: {
            enabled
          }
        }
      })
    case INVITE_MODAL:
      return f(action, ({ enabled }) => {
        return {
          ...state,
          inviteModal: {
            enabled
          }
        }
      })
    case REBIRTH_MODAL:
      return f(action, ({ enabled, index }) => {
        return {
          ...state,
          rebirthModal: {
            enabled,
            index
          }
        }
      })
      case BETTER_WORLD_MODAL:
        return f(action, ({ enabled, index }) => {
          return {
            ...state,
            betterWorldModal: {
              enabled
            }
          }
        })
    default: {
      return state
    }
  }
}
