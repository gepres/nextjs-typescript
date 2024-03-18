
import  { useMediaQuery, deviceDesktop, deviceMobile,deviceMobileAndTablet,deviceTablet }  from "./useMediaQuery";


export const  useBreakpoints = () => {
  const breakpoints = {
    isXs: useMediaQuery("(max-width: 640px)"),
    isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
    isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
    isLg: useMediaQuery("(min-width: 1025px) and (max-width: 1280px)"),
    isXl: useMediaQuery("(min-width: 1281px)"),
    is2xl: useMediaQuery("(min-width: 1536px)"),
    isMobile: useMediaQuery("(max-width: 640px)") ?? deviceMobile(),
    isTablet: useMediaQuery("(max-width: 1024px)") ?? deviceTablet(),
    isMobileAndTable: useMediaQuery("(max-width: 1024px)") ?? deviceMobileAndTablet(),
    isDesktop: deviceDesktop(),
    active: "xs"
  };

  if (breakpoints.isXs) breakpoints.active = "xs";
  if (breakpoints.isSm) breakpoints.active = "sm";
  if (breakpoints.isMd) breakpoints.active = "md";
  if (breakpoints.isLg) breakpoints.active = "lg";
  if (breakpoints.isXl) breakpoints.active = "xl";
  if (breakpoints.is2xl) breakpoints.active = "xxl";
  
  return breakpoints;
}
