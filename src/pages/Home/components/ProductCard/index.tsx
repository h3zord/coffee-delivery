import { useEffect, useReducer, useState } from 'react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import { ProductCardContainer } from './styles'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { IDataCoffee } from '../../../../interfaces'
import { coffeeQuantityReducer } from '../../../../reducers/coffeeQuantity'

export function ProductCard(coffee: IDataCoffee) {
  const [dataCoffeeToAdd, setDataCoffeeToAdd] = useState({})

  const [coffeeQuantity, dispatch] = useReducer(coffeeQuantityReducer, 0)

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
    dispatch({
      type: 'ADD_ONE_MORE_COFFEE',
    })
  }

  const removeOneMoreCoffee = () => {
    dispatch({
      type: 'REMOVE_ONE_MORE_COFFEE',
    })
  }

  return (
    <>
      <ProductCardContainer key={coffee.id}>
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
            coffeeQuantity={coffeeQuantity}
            addOneMoreCoffee={addOneMoreCoffee}
            removeOneMoreCoffee={removeOneMoreCoffee}
          />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </ProductCardContainer>
    </>
  )
}
