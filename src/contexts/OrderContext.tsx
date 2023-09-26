import { MouseEvent, createContext, useReducer, useState } from 'react'
import { coffeeListOrderReducer } from '../reducers/coffeeListOrder'
import { TBuyerInfoData } from './BuyerInfoFormContext'
import {
  addCoffeeToCartAction,
  addOneMoreCoffeeFromOrderAction,
  deleteCoffeeFromCartAction,
  removeOneMoreCoffeeFromOrderAction,
  resetCartAction,
} from '../reducers/actions'
import {
  IDataCoffeeCart,
  IProviderProps,
  IOrderContextType,
  TPaymentMethod,
} from '../interfacesAndTypes'

export const OrderContext = createContext({} as IOrderContextType)

export function OrderContextProvider({ children }: IProviderProps) {
  const [coffeeListOrder, dispatch] = useReducer(coffeeListOrderReducer, [])

  const [buyerInfoData, setBuyerInfoData] = useState({} as TBuyerInfoData)

  const [paymentMethod, setPaymentMethod] =
    useState<TPaymentMethod>('Cartão de crédito')

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

  const setPaymentMethodProxy = (event: MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value as TPaymentMethod

    setPaymentMethod(value)
  }

  const saveBuyerInfoDataProxy = (data: TBuyerInfoData) =>
    setBuyerInfoData(data)

  const resetCart = () => dispatch(resetCartAction())

  return (
    <OrderContext.Provider
      value={{
        coffeeListOrder,
        buyerInfoData,
        paymentMethod,
        addCoffeeToCart,
        deleteCoffeeFromCart,
        addOneMoreCoffeeFromOrder,
        removeOneMoreCoffeeFromOrder,
        saveBuyerInfoDataProxy,
        setPaymentMethodProxy,
        resetCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
