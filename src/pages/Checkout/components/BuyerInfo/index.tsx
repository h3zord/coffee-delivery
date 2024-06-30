import { useContext, useState } from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form'
import { OrderContext } from '../../../../contexts/OrderContext'
import { TBuyerInfoData } from '../../../../contexts/BuyerInfoFormContext'
import { useNavigate } from 'react-router-dom'
import { TPaymentMethod } from '../../../../interfacesAndTypes'
import {
  OrderInfoContainer,
  FormContent,
  DescriptionContent,
  MethodPaymentContent,
  BuyerInfoForm,
  BuyerInfoContent,
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
    setValue,
    resetField,
    watch,
    formState: { errors },
  } = useFormContext<TBuyerInfoData>()

  const { saveBuyerInfoDataProxy, resetOrder } = useContext(OrderContext)

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<TPaymentMethod>('Cartão de crédito')

  const [hasCpfError, setHasCpfError] = useState(false)

  const navigate = useNavigate()

  const resetCityAndUFValues = () => {
    resetField('cidade')
    resetField('uf')
  }

  const findCityAndUF = async () => {
    const cep = watch('cep')

    const regex = /\d{5}[-.\s]?\d{3}/
    const onlyNumbersCep = cep.replace(/\D/g, '')

    if (regex.test(onlyNumbersCep) && onlyNumbersCep.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${onlyNumbersCep}/json/`,
        )
        const dataLocation = await response.json()

        if (dataLocation.erro) throw new Error('Falha na requisição!')

        setValue('cidade', dataLocation.localidade)
        setValue('uf', dataLocation.uf)

        setHasCpfError(false)
      } catch (error) {
        setHasCpfError(true)

        resetCityAndUFValues()

        console.error(error)
      }
    } else {
      setHasCpfError(false)

      resetCityAndUFValues()
    }
  }

  const saveBuyerInfoData: SubmitHandler<TBuyerInfoData> = (buyerInfo) => {
    saveBuyerInfoDataProxy(buyerInfo)

    resetOrder()

    navigate('/sucess')
  }

  const handlePaymentMethodChange = (paymentMethod: TPaymentMethod) => {
    setSelectedPaymentMethod(paymentMethod)

    setValue('metodoPagamento', paymentMethod)
  }

  return (
    <OrderInfoContainer data-testid="buyer-info">
      <h6>Complete seu pedido</h6>

      <BuyerInfoForm
        onSubmit={handleSubmit(saveBuyerInfoData)}
        id="buyer-info-form"
      >
        <BuyerInfoContent>
          <DescriptionContent>
            <MapPinLine size="22" color="#C47F17" />
            <h6>Endereço de Entrega</h6>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </DescriptionContent>
          <FormContent
            $hasFormError={{
              cidade: Boolean(errors.cidade),
              uf: Boolean(errors.uf),
              rua: Boolean(errors.rua),
              numero: Boolean(errors.numero),
              bairro: Boolean(errors.bairro),
              cep: Boolean(errors.cep),
            }}
          >
            <input
              type="text"
              placeholder="CEP"
              {...register('cep')}
              onBlur={() => findCityAndUF()}
            />

            <input type="text" placeholder="Rua" {...register('rua')} />
            <input type="text" placeholder="Número" {...register('numero')} />
            <input
              type="text"
              placeholder="Complemento (Opcional)"
              {...register('complemento')}
            />
            <input type="text" placeholder="Bairro" {...register('bairro')} />
            <input
              type="text"
              placeholder="Cidade"
              readOnly
              {...register('cidade')}
            />
            <input type="text" placeholder="UF" readOnly {...register('uf')} />

            {hasCpfError && <span>O CPF informado não existe.</span>}
          </FormContent>
        </BuyerInfoContent>

        <BuyerInfoContent>
          <DescriptionContent>
            <CurrencyDollar size="22" color="#8047f8" />
            <h6>Pagamento</h6>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </DescriptionContent>
          <MethodPaymentContent data-testid="method-payment">
            <button
              type="button"
              className={`payment-btn ${
                selectedPaymentMethod === 'Cartão de crédito' && 'active'
              }`}
              {...register('metodoPagamento')}
              onClick={() => handlePaymentMethodChange('Cartão de crédito')}
            >
              <CreditCard size="16" color="#8047f8" />
              CARTÃO DE CRÉDITO
            </button>
            <button
              type="button"
              className={`payment-btn ${
                selectedPaymentMethod === 'Cartão de débito' && 'active'
              }`}
              {...register('metodoPagamento')}
              onClick={() => handlePaymentMethodChange('Cartão de débito')}
            >
              <Bank size="16" color="#8047f8" />
              CARTÃO DE DÉBITO
            </button>
            <button
              type="button"
              className={`payment-btn ${
                selectedPaymentMethod === 'Dinheiro' && 'active'
              }`}
              {...register('metodoPagamento')}
              onClick={() => handlePaymentMethodChange('Dinheiro')}
            >
              <Money size="16" color="#8047f8" />
              DINHEIRO
            </button>
          </MethodPaymentContent>
        </BuyerInfoContent>
      </BuyerInfoForm>
    </OrderInfoContainer>
  )
}
