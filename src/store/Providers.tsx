'use client';
import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux'
import { makeStore, AppStore, useAppSelector } from './index'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '@/config/themeChakraui';
import { ChakraProps } from '@chakra-ui/react';


type  Props = {
  children: React.ReactNode | React.ReactNode[]
}

function ProvidersChakra({ children }: Props) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}


export default function StoreProvider({
  children,
}: Props) {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <ProvidersChakra><Provider store={storeRef.current}>{children}</Provider></ProvidersChakra>
}