import { ProductCard } from '../ProductCard'
import { ProductsContainer } from './styles'

export function Products() {
  return (
    <ProductsContainer>
      <h2>Nossos cafés</h2>
      <div>
        <ProductCard />
      </div>
    </ProductsContainer>
  )
}
