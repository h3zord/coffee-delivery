import { useContext, useEffect, useReducer, useState } from 'react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import { ProductCardContainer } from './styles'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { IDataCoffee, IDataCoffeeCart } from '../../../../interfacesAndTypes'
import { coffeeQuantityReducer } from '../../../../reducers/coffeeQuantity'
import { OrderContext } from '../../../../contexts/OrderContext'
import { toast } from 'react-toastify'
import {
  addOneMoreCoffeeAction,
  removeOneMoreCoffeeAction,
} from '../../../../reducers/actions'

export function ProductCard(coffee: IDataCoffee) {
  const { addCoffeeToCart, coffeeListOrder } = useContext(OrderContext)

  const [dataCoffeeToAdd, setDataCoffeeToAdd] = useState({} as IDataCoffeeCart)

  const findCoffee = coffeeListOrder.find(({ id }) => id === coffee.id)

  const [coffeeQuantity, dispatch] = useReducer(
    coffeeQuantityReducer,
    findCoffee ? findCoffee.quantity : 0,
  )

  useEffect(() => {
    setDataCoffeeToAdd({
      id: coffee.id,
      name: coffee.name,
      thumbnail: coffee.thumbnail,
      price: coffee.price,
      quantity: coffeeQuantity,
    })
  }, [coffee, coffeeQuantity])

  const addOneMoreCoffee = () => {
    dispatch(addOneMoreCoffeeAction())
  }

  const removeOneMoreCoffee = () => {
    dispatch(removeOneMoreCoffeeAction())
  }

  return (
    <>
      <ProductCardContainer key={coffee.id} data-testid="coffee-card">
        <img src={coffee.thumbnail} alt="" />
        <div>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h6>{coffee.name}</h6>
        <p>{coffee.description}</p>
        <div>
          <span>R$</span>
          <p>{coffee.price.toFixed(2).replace('.', ',')}</p>
          <ProductQuantity
            dataCoffee={dataCoffeeToAdd}
            addOneMoreCoffee={addOneMoreCoffee}
            removeOneMoreCoffee={removeOneMoreCoffee}
          />
          <button
            data-testid="add-to-cart"
            disabled={!coffeeQuantity}
            onClick={() => {
              addCoffeeToCart(dataCoffeeToAdd)
              toast.success('Café adicionado ao carrinho! ☕')
            }}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </ProductCardContainer>
    </>
  )
}
