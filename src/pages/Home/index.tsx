import { dataCoffee } from '../../data'
import { Introduction } from './components/Introduction'
import { ProductCard } from './components/ProductCard'
import { IntroductionContainer, ProductsContainer } from './style'

export function Home() {
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
