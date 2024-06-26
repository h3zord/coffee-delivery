import { ICoffeeListOrderAction, IDataCoffeeOrder } from '../interfacesAndTypes'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export function coffeeListOrderReducer(
  state: IDataCoffeeOrder[],
  action: ICoffeeListOrderAction,
) {
  const coffeeIndex = state.findIndex(
    ({ id }) => id === action.payload?.dataCoffee.id,
  )

  const isNewCoffee = coffeeIndex === -1

  if (action.payload) {
    switch (action.type) {
      case ActionTypes.ADD_COFFEE_TO_CART: {
        if (action.payload.dataCoffee.quantity === 0) return state

        if (!isNewCoffee) {
          return produce(state, (draft) => {
            draft[coffeeIndex].quantity = action.payload!.dataCoffee.quantity
          })
        }

        return [...state, action.payload.dataCoffee]
      }

      case ActionTypes.ADD_ONE_MORE_COFFEE_TO_ORDER: {
        return produce(state, (draft) => {
          draft[coffeeIndex].quantity += 1
        })
      }

      case ActionTypes.REMOVE_ONE_MORE_COFFEE_FROM_ORDER: {
        if (action.payload.dataCoffee.quantity > 1) {
          return produce(state, (draft) => {
            draft[coffeeIndex].quantity -= 1
          })
        }

        return state
      }

      case ActionTypes.DELETE_COFFEE_FROM_ORDER: {
        const newCoffeeListOrder = state.filter(
          ({ id }) => id !== action.payload!.dataCoffee.id,
        )

        return newCoffeeListOrder
      }
    }
  }

  switch (action.type) {
    case ActionTypes.RESET_CART: {
      return (state = [])
    }
  }

  return state
}
