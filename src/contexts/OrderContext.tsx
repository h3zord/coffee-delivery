import { createContext, useReducer } from 'react'
import { coffeeListOrderReducer } from '../reducers/coffeeListOrder'
import { addCoffeeToCartAction } from '../reducers/actions'
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

  return (
    <OrderContext.Provider value={{ coffeeListOrder, addCoffeeToCart }}>
      {children}
    </OrderContext.Provider>
  )
}
