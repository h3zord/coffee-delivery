import { createContext, useReducer } from 'react'
import { coffeeListOrderReducer } from '../reducers/coffeeListOrder'
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
} from '../reducers/actions'
import {
  IDataCoffeeCart,
  IOrderContextProviderProps,
  IOrderContextType,
} from '../interfaces'

export const OrderContext = createContext({} as IOrderContextType)

export function OrderContextProvider({ children }: IOrderContextProviderProps) {
  const [coffeeListOrder, dispatch] = useReducer(coffeeListOrderReducer, [])

  const addCoffeeToCart = (newCoffee: IDataCoffeeCart) => {
    dispatch(addCoffeeToCartAction(newCoffee))
  }

  const removeCoffeeFromCart = (coffeeToRemove: IDataCoffeeCart) => {
    dispatch(removeCoffeeFromCartAction(coffeeToRemove))
  }

  return (
    <OrderContext.Provider
      value={{ coffeeListOrder, addCoffeeToCart, removeCoffeeFromCart }}
    >
      {children}
    </OrderContext.Provider>
  )
}
