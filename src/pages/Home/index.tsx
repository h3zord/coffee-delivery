import { useEffect, useState } from 'react'
// import { dataCoffee } from '../../data'
import { Introduction } from './components/Introduction'
import { ProductCard } from './components/ProductCard'
import { IntroductionContainer, ProductsContainer } from './style'
import { IDataCoffee } from '../../interfacesAndTypes'

export function Home() {
  const [dataCoffee, setDataCoffe] = useState<IDataCoffee[]>([])

  useEffect(() => {
    const getDataCoffee = async () => {
      const response = await fetch('http://localhost:3333/coffees')
      const data = await response.json()

      setDataCoffe(data)
    }

    getDataCoffee()
  }, [])

  return (
    <>
      <IntroductionContainer>
        <Introduction />
      </IntroductionContainer>
      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <div>
          {dataCoffee.map((coffee) => (
            <ProductCard {...coffee} key={coffee.id} />
          ))}
        </div>
      </ProductsContainer>
    </>
  )
}
