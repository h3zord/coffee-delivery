import { FormProvider, useForm } from 'react-hook-form'
import { IProviderProps } from '../interfaces'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const buyerInfoValidationSchema = zod.object({
  'rua-input': zod.string().min(1, 'Este campo é de preenchimento obrigatório'),
  'complemento-input': zod.string(),
  'numero-input': zod
    .string()
    .min(1, 'Este campo é de preenchimento obrigatório'),
  'bairro-input': zod
    .string()
    .min(1, 'Este campo é de preenchimento obrigatório'),
  'cep-input': zod
    .string()
    .min(1)
    .max(9)
    .regex(/\d{5}[-.\s]?\d{3}/, {
      message: 'Este formato de CEP é inválido',
    }),
})

type BuyerInfoData = zod.infer<typeof buyerInfoValidationSchema>

export function BuyerInfoContext({ children }: IProviderProps) {
  const BuyerInfo = useForm<BuyerInfoData>({
    resolver: zodResolver(buyerInfoValidationSchema),
    defaultValues: {
      'cep-input': '',
      'rua-input': '',
      'numero-input': '',
      'complemento-input': '',
      'bairro-input': '',
    },
  })

  return <FormProvider {...BuyerInfo}>{children}</FormProvider>
}
