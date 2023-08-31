import { ProductQuantityContainer } from './style'
import { Plus, Minus } from '@phosphor-icons/react'

export function ProductQuantity() {
  return (
    <ProductQuantityContainer>
      <button>
        <Minus weight="bold" size="16" />
      </button>
      <span className="quantity-value">10</span>
      <button>
        <Plus weight="bold" size="16" />
      </button>
    </ProductQuantityContainer>
  )
}
