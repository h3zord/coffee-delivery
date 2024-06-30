import { ReactNode } from 'react'
import { TBuyerInfoData } from '../contexts/BuyerInfoFormContext'

export interface IDataCoffeeOrder {
  id: number
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
  coffeeListOrder: IDataCoffeeOrder[]
  buyerInfoData: TBuyerInfoData
  addCoffeeToCart: (newCoffee: IDataCoffeeOrder) => void
  addOneMoreCoffeeToOrder: (coffeeToIncreaseQuantity: IDataCoffeeOrder) => void
  removeOneMoreCoffeeFromOrder: (
    coffeeToDecreaseQuantity: IDataCoffeeOrder,
  ) => void
  deleteCoffeeFromOrder: (coffeeToDelete: IDataCoffeeOrder) => void
  resetOrder: () => void
  saveBuyerInfoDataProxy: (data: TBuyerInfoData) => void
}

export interface IProviderProps {
  children: ReactNode
}

export interface IDataCoffee {
  id: number
  name: string
  description: string
  price: number
  thumbnail: string
  tags: string[]
}

export interface IProductQuantityProps {
  dataCoffee: IDataCoffeeOrder
  addOneMoreCoffeeToCart?: () => void
  removeOneMoreCoffeeFromCart?: () => void
  addOneMoreCoffeeToOrder?: (coffeeToIncreaseQuantity: IDataCoffeeOrder) => void
  removeOneMoreCoffeeFromOrder?: (
    coffeeToDecreaseQuantity: IDataCoffeeOrder,
  ) => void
}

export interface ICoffeeQuantityAction {
  type: string
}

export interface ICoffeeListOrderAction {
  type: string
  payload?: {
    dataCoffee: IDataCoffeeOrder
  }
}

export type TFormProps = {
  $hasFormError: {
    cidade: boolean
    uf: boolean
    rua: boolean
    numero: boolean
    bairro: boolean
    cep: boolean
  }
}

export interface IGeoInfoData {
  ip: string
  hostname: string
  city: string
  region: string
  country: string
  loc: string
  org: string
  postal: string
  timezone: string
  readme: string
}
