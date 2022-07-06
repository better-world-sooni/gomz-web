const initialState = {
  mintingModal: {
    enabled: false
  },
  inviteModal: {
    enabled: false
  },
  rebirthModal: {
    enabled: false,
    tokenId: null,
  },
}

// action type
export const MINTING_MODAL = 'modal/MINTING_MODAL' as const
export const INVITE_MODAL = 'modal/INVITE_MODAL' as const
export const REBIRTH_MODAL = 'modal/REBIRTH_MODAL' as const

// action function
export const mintingModalAction = ({enabled}) => ({ type: MINTING_MODAL, enabled })
export const inviteModalAction = ({enabled}) => ({ type: INVITE_MODAL, enabled })
export const rebirthModalAction = ({enabled, index}) => ({ type: REBIRTH_MODAL, enabled, index })

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
    default: {
      return state
    }
  }
}
