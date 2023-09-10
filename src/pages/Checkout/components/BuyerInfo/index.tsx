import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
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

export function BuyerInfo() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    resetField,
    formState: { errors },
  } = useFormContext()

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

  const saveBuyerInfo = (data) => {}

  console.log(errors)

  const resetCityAndUFValues = () => {
    resetField('cidade-input')
    resetField('uf-input')
  }

  const findCityAndUF = async () => {
    const cep = getValues('cep-input').replace(/\D/g, '')
    const regex = /\d{5}[-.\s]?\d{3}/

    if (regex.test(cep) && cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const dataLocation = await response.json()

        if (dataLocation.erro) throw new Error('Falha na requisição!')

        setValue('cidade-input', dataLocation.localidade)
        setValue('uf-input', dataLocation.uf)
      } catch (error) {
        resetCityAndUFValues()
        console.error(error)
      }
    } else {
      resetCityAndUFValues()
      console.error('cep invalido')
    }
  }

  return (
    <OrderInfoContainer>
      <h6>Complete seu pedido</h6>
      <OrderInfoContent>
        <DescriptionContent>
          <MapPinLine size="22" color="#C47F17" />
          <h6>Endereço de Entrega</h6>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </DescriptionContent>
        <FormContent
          onSubmit={handleSubmit(saveBuyerInfo)}
          id="buyer-info-form"
        >
          <input
            type="text"
            placeholder="CEP"
            {...register('cep-input')}
            onBlur={() => findCityAndUF()}
          />
          <input type="text" placeholder="Rua" {...register('rua-input')} />
          <input
            type="text"
            placeholder="Número"
            {...register('numero-input')}
          />
          <input
            type="text"
            placeholder="Complemento"
            {...register('complemento-input')}
          />
          <input
            type="text"
            placeholder="Bairro"
            {...register('bairro-input')}
          />
          <input
            type="text"
            placeholder="Cidade"
            readOnly
            {...register('cidade-input')}
          />
          <input
            type="text"
            placeholder="UF"
            readOnly
            {...register('uf-input')}
          />
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
          <button className="payment-btn" value="Cartão de crédito">
            <CreditCard size="16" color="#8047f8" />
            CARTÃO DE CRÉDITO
          </button>
          <button className="payment-btn" value="Cartão de débito">
            <Bank size="16" color="#8047f8" />
            CARTÃO DE DÉBITO
          </button>
          <button className="payment-btn" value="Dinheiro">
            <Money size="16" color="#8047f8" />
            DINHEIRO
          </button>
        </MethodPaymentContent>
      </OrderInfoContent>
    </OrderInfoContainer>
  )
}
