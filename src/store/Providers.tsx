'use client';
import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux'
import { makeStore, AppStore, useAppSelector } from './index'
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/config/ui/themeMaterialui';


function ProvidersMaterialUI({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}



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

  return <Provider store={storeRef.current}><ProvidersMaterialUI>{children}</ProvidersMaterialUI></Provider>
}