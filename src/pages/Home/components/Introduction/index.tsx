import { IntroductionText } from './styles'

export function Introduction() {
  return (
    <>
      <IntroductionText data-testid="introduction-text">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h4>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h4>
        </div>
        <div>
          <span>
            <img src="/cart-icon.svg" alt="Cart Icon" /> Compra simples e segura
          </span>
          <span>
            <img src="/box-icon.svg" alt="Box Icon" /> Embalagem mantém o café
            intacto
          </span>
          <span>
            <img src="/timer-icon.svg" alt="Timer Icon" /> Entrega rápida e
            rastreada
          </span>
          <span>
            <img src="/coffee-icon.svg" alt="Coffee Icon" /> O café chega mais
            fresquinho até você
          </span>
        </div>
      </IntroductionText>
      <img src="/introduction.svg" alt="introduction coffee image" />
    </>
  )
}
