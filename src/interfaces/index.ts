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
