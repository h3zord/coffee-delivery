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
  deleteCoffeeFromCart: (coffeeToDelete: IDataCoffeeCart) => void
  addOneMoreCoffeeFromOrder: (coffeeToIncreaseQuantity: IDataCoffeeCart) => void
  removeOneMoreCoffeeFromOrder: (
    coffeeToDecreaseQuantity: IDataCoffeeCart,
  ) => void
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
