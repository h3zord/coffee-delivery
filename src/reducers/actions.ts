import { IDataCoffeeCart } from '../interfaces'

export enum ActionTypes {
  ADD_ONE_MORE_COFFEE = 'ADD_ONE_MORE_COFFEE',
  REMOVE_ONE_MORE_COFFEE = 'REMOVE_ONE_MORE_COFFEE',
  ADD_ONE_MORE_COFFEE_FROM_ORDER = 'ADD_ONE_MORE_COFFEE_FROM_ORDER',
  REMOVE_ONE_MORE_COFFEE_FROM_ORDER = 'REMOVE_ONE_MORE_COFFEE_FROM_ORDER',
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  DELETE_COFFEE_FROM_CART = 'DELETE_COFFEE_FROM_CART',
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

export function deleteCoffeeFromCartAction(dataCoffee: IDataCoffeeCart) {
  return {
    type: ActionTypes.DELETE_COFFEE_FROM_CART,
    payload: {
      dataCoffee,
    },
  }
}

export function addOneMoreCoffeeFromOrderAction(dataCoffee: IDataCoffeeCart) {
  return {
    type: ActionTypes.ADD_ONE_MORE_COFFEE_FROM_ORDER,
    payload: {
      dataCoffee,
    },
  }
}

export function removeOneMoreCoffeeFromOrderAction(
  dataCoffee: IDataCoffeeCart,
) {
  return {
    type: ActionTypes.REMOVE_ONE_MORE_COFFEE_FROM_ORDER,
    payload: {
      dataCoffee,
    },
  }
}
