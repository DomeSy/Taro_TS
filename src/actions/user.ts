import { USERINIT } from '../constants/user'
import { ReduxRquest } from '@utils'

export const DUSERINIT = (param:any = {}) => ReduxRquest({
  type: USERINIT,
  param
}, 'user')
