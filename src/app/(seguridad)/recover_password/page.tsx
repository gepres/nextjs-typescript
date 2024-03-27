import {GridRecoverPassword}  from '@/partials/pages/(seguridad)/recover_password/gridRecoverPassword';

export const metadata = {
 title: 'Izipay - Olvide mi contraseña',
 description: 'Izipay - Olvide mi contraseña',
};

export default function Home() {
  return (
    <>
     <GridRecoverPassword />
    </>
  );
}
