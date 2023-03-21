import { useContext } from 'react'

import { StateContext } from './state'

export const useStateContext = () => useContext(StateContext)
