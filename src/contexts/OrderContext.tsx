import { createContext, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { coffeeListOrderReducer } from '../reducers/coffeeListOrder'
import { TBuyerInfoData } from './BuyerInfoFormContext'
import { SubmitHandler } from 'react-hook-form'
import {
  addCoffeeToCartAction,
  addOneMoreCoffeeFromOrderAction,
  deleteCoffeeFromCartAction,
  removeOneMoreCoffeeFromOrderAction,
} from '../reducers/actions'
import {
  IDataCoffeeCart,
  IProviderProps,
  IOrderContextType,
} from '../interfaces'

export const OrderContext = createContext({} as IOrderContextType)

export function OrderContextProvider({ children }: IProviderProps) {
  const [coffeeListOrder, dispatch] = useReducer(coffeeListOrderReducer, [])

  const [buyerInfoData, setBuyerInfoData] = useState({} as TBuyerInfoData)

  const navigate = useNavigate()

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

  const saveBuyerInfoDataProxy: SubmitHandler<TBuyerInfoData> = (data) => {
    setBuyerInfoData(data)
    navigate('/sucess')
  }

  return (
    <OrderContext.Provider
      value={{
        coffeeListOrder,
        buyerInfoData,
        addCoffeeToCart,
        deleteCoffeeFromCart,
        addOneMoreCoffeeFromOrder,
        removeOneMoreCoffeeFromOrder,
        saveBuyerInfoDataProxy,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
