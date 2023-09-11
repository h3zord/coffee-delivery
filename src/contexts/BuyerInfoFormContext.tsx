import { FormProvider, useForm } from 'react-hook-form'
import { IProviderProps } from '../interfacesAndTypes'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const buyerInfoValidationSchema = zod.object({
  cidade: zod.string().min(1, 'Este campo é de preenchimento obrigatório'),
  uf: zod.string().min(1, 'Este campo é de preenchimento obrigatório'),
  rua: zod.string().min(1, 'Este campo é de preenchimento obrigatório'),
  numero: zod.string().min(1, 'Este campo é de preenchimento obrigatório'),
  bairro: zod.string().min(1, 'Este campo é de preenchimento obrigatório'),
  complemento: zod.string().optional(),
  cep: zod
    .string()
    .min(1, 'Este campo é de preenchimento obrigatório')
    .max(9, 'Este formato de CEP é inválido')
    .regex(/\d{5}[-.\s]?\d{3}/, {
      message: 'Este formato de CEP é inválido',
    })
    .refine((val) => val.replace(/\D/g, '')),
})

export type TBuyerInfoData = zod.infer<typeof buyerInfoValidationSchema>

export function BuyerInfoFormContext({ children }: IProviderProps) {
  const BuyerInfo = useForm<TBuyerInfoData>({
    resolver: zodResolver(buyerInfoValidationSchema),
    defaultValues: {
      cidade: '',
      uf: '',
      rua: '',
      numero: '',
      bairro: '',
      complemento: '',
      cep: '',
    },
  })

  return <FormProvider {...BuyerInfo}>{children}</FormProvider>
}
