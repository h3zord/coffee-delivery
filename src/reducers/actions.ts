import { IDataCoffeeCart } from '../interfaces'

export enum ActionTypes {
  ADD_ONE_MORE_COFFEE = 'ADD_ONE_MORE_COFFEE',
  REMOVE_ONE_MORE_COFFEE = 'REMOVE_ONE_MORE_COFFEE',
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
}

export function addOneMoreCoffeeAction() {
  return {
    type: ActionTypes.ADD_ONE_MORE_COFFEE,
  }
}

export function removeOneMoreCoffeeAction() {
  return {
    type: ActionTypes.REMOVE_ONE_MORE_COFFEE,
  }
}

export function addCoffeeToCartAction(dataCoffee: IDataCoffeeCart) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      dataCoffee,
    },
  }
}

export function removeCoffeeFromCartAction(dataCoffee: IDataCoffeeCart) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      dataCoffee,
    },
  }
}
