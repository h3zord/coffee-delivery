import { ICoffeeQuantityAction } from '../interfaces'
import { ActionTypes } from './actions'

export function coffeeQuantityReducer(
  state: number,
  action: ICoffeeQuantityAction,
) {
  switch (action.type) {
    case ActionTypes.ADD_ONE_MORE_COFFEE:
      return state + 1

    case ActionTypes.REMOVE_ONE_MORE_COFFEE:
      if (state > 0) return state - 1
  }

  return state
}
