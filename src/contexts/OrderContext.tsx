import { createContext, useReducer } from 'react'
import { coffeeListOrderReducer } from '../reducers/coffeeListOrder'
import {
  addCoffeeToCartAction,
  addOneMoreCoffeeFromOrderAction,
  deleteCoffeeFromCartAction,
  removeOneMoreCoffeeFromOrderAction,
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

  const deleteCoffeeFromCart = (coffeeToDelete: IDataCoffeeCart) => {
    dispatch(deleteCoffeeFromCartAction(coffeeToDelete))
  }

  const addOneMoreCoffeeFromOrder = (
    coffeeToIncreaseQuantity: IDataCoffeeCart,
  ) => {
    dispatch(addOneMoreCoffeeFromOrderAction(coffeeToIncreaseQuantity))
  }

  const removeOneMoreCoffeeFromOrder = (
    coffeeToDecreaseQuantity: IDataCoffeeCart,
  ) => {
    dispatch(removeOneMoreCoffeeFromOrderAction(coffeeToDecreaseQuantity))
  }

  return (
    <OrderContext.Provider
      value={{
        coffeeListOrder,
        addCoffeeToCart,
        deleteCoffeeFromCart,
        addOneMoreCoffeeFromOrder,
        removeOneMoreCoffeeFromOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
