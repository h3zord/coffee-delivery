import { IDataCoffeeOrder } from '../interfacesAndTypes'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  ADD_ONE_MORE_COFFEE_TO_CART = 'ADD_ONE_MORE_COFFEE_TO_CART',
  REMOVE_ONE_MORE_COFFEE_FROM_CART = 'REMOVE_ONE_MORE_COFFEE_FROM_CART',
  ADD_ONE_MORE_COFFEE_TO_ORDER = 'ADD_ONE_MORE_COFFEE_TO_ORDER',
  REMOVE_ONE_MORE_COFFEE_FROM_ORDER = 'REMOVE_ONE_MORE_COFFEE_FROM_ORDER',
  DELETE_COFFEE_FROM_ORDER = 'DELETE_COFFEE_FROM_ORDER',
  RESET_CART = 'RESET_CART',
}

export function addCoffeeToCartAction(dataCoffee: IDataCoffeeOrder) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      dataCoffee,
    },
  }
}

export function addOneMoreCoffeeToCartAction() {
  return {
    type: ActionTypes.ADD_ONE_MORE_COFFEE_TO_CART,
  }
}

export function removeOneMoreCoffeeFromCartAction() {
  return {
    type: ActionTypes.REMOVE_ONE_MORE_COFFEE_FROM_CART,
  }
}

export function addOneMoreCoffeeToOrderAction(dataCoffee: IDataCoffeeOrder) {
  return {
    type: ActionTypes.ADD_ONE_MORE_COFFEE_TO_ORDER,
    payload: {
      dataCoffee,
    },
  }
}

export function removeOneMoreCoffeeFromOrderAction(
  dataCoffee: IDataCoffeeOrder,
) {
  return {
    type: ActionTypes.REMOVE_ONE_MORE_COFFEE_FROM_ORDER,
    payload: {
      dataCoffee,
    },
  }
}

export function deleteCoffeeFromOrderAction(dataCoffee: IDataCoffeeOrder) {
  return {
    type: ActionTypes.DELETE_COFFEE_FROM_ORDER,
    payload: {
      dataCoffee,
    },
  }
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
  }
}
