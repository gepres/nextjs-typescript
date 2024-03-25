import  '@/assets/styles/scss/pages/(public)/qrshare.scss'

export const metadata = {
 title: 'Izipay - QR share',
 description: 'QR share',
};

export default function page() {
  return (
   <>
    <div className='content'>
      {/* COMPONENTE DE CARGA */}
      {/* CABECERA IZIPAY */}
      {/* COMPONENTE DE FORMULARIO */}
      <h1>Consulta de QR</h1>
      {/* COMPONENTE DE RESULTADO */}

      <div className="">
        <div className="">
          <label className="block text-sm font-medium leading-6 text-gray-900">Código de comercioname</label>
          <div className="mt-2">
          <input type="text" placeholder="Escribe aquí" className="input input-bordered input-md w-full max-w-xs bg-red_default" />
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
