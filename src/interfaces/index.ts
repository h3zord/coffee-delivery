import { MouseEvent, ReactNode } from 'react'
import { TBuyerInfoData } from '../contexts/BuyerInfoFormContext'

export interface IDataCoffeeCart {
  id: string
  name: string
  price: number
  thumbnail: string
  quantity: number
}

export type TPaymentMethod =
  | 'Cartão de crédito'
  | 'Cartão de débito'
  | 'Dinheiro'

export interface IOrderContextType {
  coffeeListOrder: IDataCoffeeCart[]
  buyerInfoData: TBuyerInfoData
  paymentMethod: TPaymentMethod
  addCoffeeToCart: (newCoffee: IDataCoffeeCart) => void
  deleteCoffeeFromCart: (coffeeToDelete: IDataCoffeeCart) => void
  addOneMoreCoffeeFromOrder: (coffeeToIncreaseQuantity: IDataCoffeeCart) => void
  saveBuyerInfoDataProxy: (data: TBuyerInfoData) => void
  setPaymentMethodProxy: (event: MouseEvent<HTMLButtonElement>) => void
  removeOneMoreCoffeeFromOrder: (
    coffeeToDecreaseQuantity: IDataCoffeeCart,
  ) => void
}

export interface IProviderProps {
  children: ReactNode
}

export interface IDataCoffee {
  id: string
  name: string
  description: string
  price: number
  thumbnail: string
  tags: string[]
}

export interface IProductQuantityProps {
  dataCoffee: IDataCoffeeCart
  addOneMoreCoffee?: () => void
  removeOneMoreCoffee?: () => void
  addOneMoreCoffeeFromOrder?: (
    coffeeToIncreaseQuantity: IDataCoffeeCart,
  ) => void
  removeOneMoreCoffeeFromOrder?: (
    coffeeToDecreaseQuantity: IDataCoffeeCart,
  ) => void
}

export interface ICoffeeQuantityAction {
  type: string
}

export interface ICoffeeListOrderAction {
  type: string
  payload: {
    dataCoffee: IDataCoffeeCart
  }
}
