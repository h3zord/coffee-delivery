import { IProductQuantityProps } from '../../interfaces'
import { ProductQuantityContainer } from './style'
import { Plus, Minus } from '@phosphor-icons/react'

export function ProductQuantity({
  coffeeQuantity,
  addOneMoreCoffee,
}: IProductQuantityProps) {
  return (
    <ProductQuantityContainer>
      <button>
        <Minus weight="bold" size="16" />
      </button>
      <span className="quantity-value">{coffeeQuantity}</span>
      <button onClick={() => addOneMoreCoffee()}>
        <Plus weight="bold" size="16" />
      </button>
    </ProductQuantityContainer>
  )
}
