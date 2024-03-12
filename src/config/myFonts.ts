import localFont from 'next/font/local'

export const  museoSans = localFont({
  src: [
    {
      path: '../../public/assets/fonts/MuseoSans_100.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/MuseoSans_300.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/MuseoSans_500.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/MuseoSans_700.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/MuseoSans_500.otf',
      weight: '500',
      style: 'rounded',
    }
  ],
})