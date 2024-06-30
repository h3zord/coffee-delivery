import { Introduction } from './components/Introduction'
import { ProductCard } from './components/ProductCard'
import { coffees } from '../../data/coffees'
import {
  IntroductionContainer,
  ProductsContainer,
  ProductsContent,
} from './style'

export function Home() {
  return (
    <>
      <IntroductionContainer>
        <Introduction />
      </IntroductionContainer>
      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <ProductsContent>
          {coffees.map((coffee) => (
            <ProductCard {...coffee} key={coffee.id} />
          ))}
        </ProductsContent>
      </ProductsContainer>
    </>
  )
}
