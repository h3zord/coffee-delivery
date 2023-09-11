import { IProductQuantityProps } from '../../interfacesAndTypes'
import { ProductQuantityContainer } from './style'
import { Plus, Minus } from '@phosphor-icons/react'

export function ProductQuantity({
  dataCoffee,
  addOneMoreCoffee,
  removeOneMoreCoffee,
  addOneMoreCoffeeFromOrder,
  removeOneMoreCoffeeFromOrder,
}: IProductQuantityProps) {
  const handleAddCoffee = () => {
    if (addOneMoreCoffee) return addOneMoreCoffee()
    if (addOneMoreCoffeeFromOrder) return addOneMoreCoffeeFromOrder(dataCoffee)
  }

  const handleRemoveCoffee = () => {
    if (removeOneMoreCoffee) return removeOneMoreCoffee()
    if (removeOneMoreCoffeeFromOrder)
      return removeOneMoreCoffeeFromOrder(dataCoffee)
  }

  return (
    <ProductQuantityContainer>
      <button onClick={() => handleRemoveCoffee()}>
        <Minus weight="bold" size="16" />
      </button>
      <span className="quantity-value">{dataCoffee.quantity}</span>
      <button onClick={() => handleAddCoffee()}>
        <Plus weight="bold" size="16" />
      </button>
    </ProductQuantityContainer>
  )
}
