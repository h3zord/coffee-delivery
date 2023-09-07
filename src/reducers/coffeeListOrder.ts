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
        ({ id }) => id === action.payload.newCoffee.id,
      )

      if (action.payload.newCoffee.quantity === 0) return state

      if (isOnTheList > -1) {
        return produce(state, (draft) => {
          draft[isOnTheList].quantity = action.payload.newCoffee.quantity
        })
      }

      return [...state, action.payload.newCoffee]
    }
  }

  return state
}
