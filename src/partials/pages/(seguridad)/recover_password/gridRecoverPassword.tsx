'use client';
import '@/assets/styles/scss/pages/(seguridad)/recover_password.scss'
import { Carousel } from '../carousel';
import { FormRecoverPassword } from './formRecoverPassword';
import Image from 'next/image';
import { useBreakpoints } from '@/config';
export function GridRecoverPassword (){
  const { isMobileAndTable } = useBreakpoints()
  return (
    <div>
      {/* v-if="is_table"  */}
      {
        isMobileAndTable 
        ? 
        <div className="bg-red_default h-[80px] flex justify-center items-center">
          <Image src="/assets/images/general/logo_reverse.png" alt='' width={100} height={70} />
        </div>
        :
        <></>
      }

      <div className="grid grid-cols-2">
        {
          !isMobileAndTable
          ?
          <div className=''>
            <Carousel />
          </div>
          :
          <></>
        }
            <div>
              <FormRecoverPassword />
            </div>
      </div>
    </div>
  )
}
