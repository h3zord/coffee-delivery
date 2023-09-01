import { useEffect } from 'react'
import {
  OrderInfoContent,
  OrderInfoContainer,
  FormContent,
  DescriptionContent,
  MethodPaymentContent,
} from './style'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

export function OrderInfo() {
  const changeClassButton = () => {
    const btnList = document.querySelectorAll('.payment-btn')

    btnList.forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active')
        btn.classList.add('active')
      })
    })
  }

  useEffect(() => {
    changeClassButton()
  }, [])

  return (
    <OrderInfoContainer>
      <h6>Complete seu pedido</h6>
      <OrderInfoContent>
        <DescriptionContent>
          <MapPinLine size="22" color="#C47F17" />
          <h6>Endereço de Entrega</h6>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </DescriptionContent>
        <FormContent>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </FormContent>
      </OrderInfoContent>
      <OrderInfoContent>
        <DescriptionContent>
          <CurrencyDollar size="22" color="#8047f8" />
          <h6>Pagamento</h6>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </DescriptionContent>
        <MethodPaymentContent>
          <div className="payment-btn">
            <CreditCard size="16" color="#8047f8" />
            CARTÃO DE CRÉDITO
          </div>
          <div className="payment-btn">
            <Bank size="16" color="#8047f8" />
            CARTÃO DE DÉBITO
          </div>
          <div className="payment-btn">
            <Money size="16" color="#8047f8" />
            DINHEIRO
          </div>
        </MethodPaymentContent>
      </OrderInfoContent>
    </OrderInfoContainer>
  )
}
