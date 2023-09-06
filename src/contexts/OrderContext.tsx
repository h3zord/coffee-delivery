import { ReactNode, createContext } from 'react'

export const OrderContext = createContext([])

interface IOrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: IOrderContextProviderProps) {
  return <OrderContext.Provider value={[]}>{children}</OrderContext.Provider>
}
