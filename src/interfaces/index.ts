import { ReactNode } from 'react'

export interface IDataCoffeeCart {
  id: string
  name: string
  price: number
  thumbnail: string
  quantity: number
}

export interface IOrderContextType {
  coffeeListOrder: IDataCoffeeCart[]
  addCoffeeToCart: (newCoffee: IDataCoffeeCart) => void
  removeCoffeeFromCart: (coffeeToRemove: IDataCoffeeCart) => void
}

export interface IOrderContextProviderProps {
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
  coffeeQuantity: number
  addOneMoreCoffee: () => void
  removeOneMoreCoffee: () => void
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
