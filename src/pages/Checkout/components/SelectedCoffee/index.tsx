import {
  BoughtCoffeContent,
  ConfirmButton,
  SelectedCoffeeContainer,
  SelectedCoffeeContent,
  TotalPriceContent,
} from './style'
import coffee from '../../../../assets/chocolate-quente.svg'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import { Trash } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function SelectedCoffee() {
  return (
    <SelectedCoffeeContainer>
      <h6>Cafés selecionados</h6>
      <SelectedCoffeeContent>
        <BoughtCoffeContent>
          <div>
            <img src={coffee} alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <div>
                <ProductQuantity />
                <button className="remove-button">
                  <Trash size="16" color="#8047f8" />
                  REMOVER
                </button>
              </div>
            </div>
          </div>
          <span>R$ 9,90</span>
        </BoughtCoffeContent>
        <hr />
        <TotalPriceContent>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
        </TotalPriceContent>
        <NavLink to={'/sucess'}>
          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </NavLink>
      </SelectedCoffeeContent>
    </SelectedCoffeeContainer>
  )
}
