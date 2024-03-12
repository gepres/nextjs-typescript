
'use client'
import { useEffect, useState } from "react";
import {isDesktop, isMobile, isMobileOnly, isTablet} from 'react-device-detect';

export function useMediaQuery(query: any) {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      if (typeof window !== 'undefined') {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);
        const handler = (event :any) => setMatches(event.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
      }
    },
    []
  );
  return matches;
} 

export const deviceMobile = () => {
  let dispositivo
    if (typeof window !== 'undefined') {
      dispositivo = isMobileOnly
    }
  
  return dispositivo
}

export const deviceTablet = () => {
  let dispositivo
    if (typeof window !== 'undefined') {
      dispositivo = isTablet
    }
  
  return dispositivo
}

export const deviceMobileAndTablet = () => {
  let dispositivo
  if (typeof window !== 'undefined') {
    dispositivo = isMobile
  }

  return dispositivo
}

function MobileOrientation(position = 'landscape') {
  const [orientation, setOrientation] = useState(false);
  useEffect(
    () => {
      if (typeof window !== 'undefined') {
        const mediaQuery = window.matchMedia(`(orientation:${position} )`)
        setOrientation(mediaQuery.matches);
        const handler = (event :any) => setOrientation(event.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
      }
    },
    []
  );
  return orientation;
} 

export const deviceDesktop = () => {
  let dispositivo
  const isLandscape = MobileOrientation('landscape')
  if (typeof window !== 'undefined') {
    dispositivo = isDesktop && isLandscape
  }

  return dispositivo
}
