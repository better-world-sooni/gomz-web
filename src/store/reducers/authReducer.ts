type KlaytnAccount = {
  address: string,
  nickname: string
  type: 'KaikasAccount' | 'KasAccount' | 'KlipAccount',
  main: boolean,
  created_at: string
}
const initialState = {
  user: {
    uuid: '',
    username: '',
    has_or_had_gomz: false,
    email_account: {
      verified: false,
      address: '',
    },
    klaytn_accounts: [] as Array<KlaytnAccount>
  },
  jwt: ''
}

// action type
export const LOGIN = 'fetch/LOGIN' as const

// action function
export const loginAction = ({user, jwt}) => ({ type: LOGIN, user, jwt })

const f = (action, func) => func(action)

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return f(action, ({ user, jwt }) => {
        return {
          ...state,
          user,
          jwt
        }
      })
    default: {
      return state
    }
  }
}


