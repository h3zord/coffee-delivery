import { MouseEvent, createContext, useReducer, useState } from 'react'
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
  TPaymentMethod,
} from '../interfaces'

export const OrderContext = createContext({} as IOrderContextType)

export function OrderContextProvider({ children }: IProviderProps) {
  const [coffeeListOrder, dispatch] = useReducer(coffeeListOrderReducer, [])

  const [buyerInfoData, setBuyerInfoData] = useState({} as TBuyerInfoData)

  const [paymentMethod, setPaymentMethod] =
    useState<TPaymentMethod>('Cartão de crédito')

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

  const setPaymentMethodProxy = (event: MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value

    setPaymentMethod(value as TPaymentMethod)
  }

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
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
