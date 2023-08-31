import { ProductCardContainer } from './styles'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import coffee from '../../assets/chocolate-quente.svg'
import { ProductQuantity } from '../ProductQuantity'

export function ProductCard() {
  return (
    <>
      <ProductCardContainer>
        <img src={coffee} alt="" />
        <div>
          <span>Tradicional</span>
          <span>Com leite</span>
        </div>
        <h6>Expresso Tradicional</h6>
        <p>aaa</p>
        <div>
          <span>R$</span>
          <p>9,90</p>
          <ProductQuantity />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </ProductCardContainer>
    </>
  )
}
