import { ProductQuantityContainer } from './style'
import { Plus, Minus } from '@phosphor-icons/react'
import {
  IDataCoffeeOrder,
  IProductQuantityProps,
} from '../../interfacesAndTypes'

type PrimaryAction = (() => void) | undefined
type SecondaryAction = ((dataCoffee: IDataCoffeeOrder) => void) | undefined

export function ProductQuantity({
  dataCoffee,
  addOneMoreCoffeeToCart,
  removeOneMoreCoffeeFromCart,
  addOneMoreCoffeeToOrder,
  removeOneMoreCoffeeFromOrder,
}: IProductQuantityProps) {
  const handleCoffeeAction = (
    primaryAction: PrimaryAction,
    secondaryAction: SecondaryAction,
  ) => {
    if (primaryAction) return primaryAction()
    if (secondaryAction) return secondaryAction(dataCoffee)
  }

  const handleAddCoffee = () =>
    handleCoffeeAction(addOneMoreCoffeeToCart, addOneMoreCoffeeToOrder)

  const handleRemoveCoffee = () =>
    handleCoffeeAction(
      removeOneMoreCoffeeFromCart,
      removeOneMoreCoffeeFromOrder,
    )

  return (
    <ProductQuantityContainer>
      <button onClick={handleRemoveCoffee} data-testid="sub-coffee">
        <Minus weight="bold" size="16" />
      </button>
      <span className="quantity-value">{dataCoffee.quantity}</span>
      <button onClick={handleAddCoffee} data-testid="add-coffee">
        <Plus weight="bold" size="16" />
      </button>
    </ProductQuantityContainer>
  )
}
