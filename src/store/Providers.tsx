'use client';
import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux'
import { makeStore, AppStore, useAppSelector } from './index'
// import { ChakraProvider } from '@chakra-ui/react'

// function ProvidersChakra({ children }: { children: React.ReactNode }) {
//   return <ChakraProvider>{children}</ChakraProvider>
// }

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}