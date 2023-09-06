import { createContext, useReducer } from 'react'
import {
  IDataCoffeeCart,
  IOrderContextProviderProps,
  IOrderContextType,
} from '../interfaces'
import { coffeeListOrderReducer } from '../reducers/coffeeListOrder'
import { addCoffeeToCartAction } from '../reducers/actions'

export const OrderContext = createContext({} as IOrderContextType)

export function OrderContextProvider({ children }: IOrderContextProviderProps) {
  const [coffeeListOrder, dispatch] = useReducer(coffeeListOrderReducer, [])

  const addCoffeeToCart = (newCoffee: IDataCoffeeCart) => {
    dispatch(addCoffeeToCartAction(newCoffee))
  }

  return (
    <OrderContext.Provider value={{ addCoffeeToCart }}>
      {children}
    </OrderContext.Provider>
  )
}
