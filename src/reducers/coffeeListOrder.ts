import { ICoffeeListOrderAction, IDataCoffeeCart } from '../interfaces'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export function coffeeListOrderReducer(
  state: IDataCoffeeCart[],
  action: ICoffeeListOrderAction,
) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART: {
      const isOnTheList = state.findIndex(
        ({ id }) => id === action.payload.dataCoffee.id,
      )

      if (action.payload.dataCoffee.quantity === 0) return state

      if (isOnTheList > -1) {
        return produce(state, (draft) => {
          draft[isOnTheList].quantity = action.payload.dataCoffee.quantity
        })
      }

      return [...state, action.payload.dataCoffee]
    }

    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      const newCoffeeListOrder = state.filter(
        ({ id }) => id !== action.payload.dataCoffee.id,
      )

      return newCoffeeListOrder
    }
  }

  return state
}
