import { IntroductionText } from './styles'
import introduction from '../../../../assets/introduction.svg'
import cartIcon from '../../../../assets/cart-icon.svg'
import boxIcon from '../../../../assets/box-icon.svg'
import timerIcon from '../../../../assets/timer-icon.svg'
import coffeeIcon from '../../../../assets/coffee-icon.svg'

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
            <img src={cartIcon} alt="Cart Icon" /> Compra simples e segura
          </span>
          <span>
            <img src={boxIcon} alt="Box Icon" /> Embalagem mantém o café intacto
          </span>
          <span>
            <img src={timerIcon} alt="Timer Icon" /> Entrega rápida e rastreada
          </span>
          <span>
            <img src={coffeeIcon} alt="Coffee Icon" /> O café chega mais
            fresquinho até você
          </span>
        </div>
      </IntroductionText>
      <img src={introduction} alt="introduction Coffee Image" />
    </>
  )
}
