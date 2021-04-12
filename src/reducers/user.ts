import { USERINIT } from '../constants/user'

const INITIAL_STATE = {
  login: false,
  userInfo: {}
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case USERINIT: {
      return {
        login: true,
        userInfo: action
      }
    }
     default:
       return state
  }
}
