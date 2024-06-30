import { createContext, useReducer, useState } from 'react'
import { coffeeListOrderReducer } from '../reducers/coffeeListOrder'
import { TBuyerInfoData } from './BuyerInfoFormContext'
import {
  addCoffeeToCartAction,
  addOneMoreCoffeeToOrderAction,
  deleteCoffeeFromOrderAction,
  removeOneMoreCoffeeFromOrderAction,
  resetCartAction,
} from '../reducers/actions'
import {
  IDataCoffeeOrder,
  IProviderProps,
  IOrderContextType,
} from '../interfacesAndTypes'

export const OrderContext = createContext({} as IOrderContextType)

export function OrderContextProvider({ children }: IProviderProps) {
  const [coffeeListOrder, dispatch] = useReducer(
    coffeeListOrderReducer,
    [] as IDataCoffeeOrder[],
  )

  const [buyerInfoData, setBuyerInfoData] = useState({} as TBuyerInfoData)

  const addCoffeeToCart = (newCoffee: IDataCoffeeOrder) => {
    dispatch(addCoffeeToCartAction(newCoffee))
  }

  const addOneMoreCoffeeToOrder = (
    coffeeToIncreaseQuantity: IDataCoffeeOrder,
  ) => {
    dispatch(addOneMoreCoffeeToOrderAction(coffeeToIncreaseQuantity))
  }

  const removeOneMoreCoffeeFromOrder = (
    coffeeToDecreaseQuantity: IDataCoffeeOrder,
  ) => {
    dispatch(removeOneMoreCoffeeFromOrderAction(coffeeToDecreaseQuantity))
  }

  const deleteCoffeeFromOrder = (coffeeToDelete: IDataCoffeeOrder) => {
    dispatch(deleteCoffeeFromOrderAction(coffeeToDelete))
  }

  const resetOrder = () => dispatch(resetCartAction())

  const saveBuyerInfoDataProxy = (buyerInfo: TBuyerInfoData) =>
    setBuyerInfoData(buyerInfo)

  return (
    <OrderContext.Provider
      value={{
        coffeeListOrder,
        buyerInfoData,
        addCoffeeToCart,
        deleteCoffeeFromOrder,
        addOneMoreCoffeeToOrder,
        removeOneMoreCoffeeFromOrder,
        resetOrder,
        saveBuyerInfoDataProxy,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
