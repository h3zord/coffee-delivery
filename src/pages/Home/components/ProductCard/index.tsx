import { useEffect, useState } from 'react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import { ProductCardContainer } from './styles'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { IDataCoffee } from '../../../../interfaces'

export function ProductCard(coffee: IDataCoffee) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)
  const [dataCoffeeToAdd, setDataCoffeeToAdd] = useState({})

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
    setCoffeeQuantity((state) => state + 1)
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
          />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </ProductCardContainer>
    </>
  )
}
