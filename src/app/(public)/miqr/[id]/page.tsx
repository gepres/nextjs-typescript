'use client';
import axios from 'axios'
import { useEffect, useState } from 'react';
import React from "react";
import Image from 'next/image'
import ReCAPTCHA from "react-google-recaptcha"
import { useAppSelector } from '@/store';
import  '@/assets/styles/scss/pages/(public)/miqr.scss'
import { sectionPdfQR } from '@/components/pages/publico/miqr/sectionPdfQR';

interface Props {
  params: { id: string }
}


export default function page({ params }: Props) {
  const recaptchaRef =  React.createRef<ReCAPTCHA>()
  const qrRef =  React.createRef<HTMLElement>()


  const {endPoint} = useAppSelector(state => state.general)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [qr, setqr] = useState('')
  const [mount, setMount] = useState(true)


  const getQR  = async (access : string) => {
    try {
      const res = await axios({
        method: 'post',
        url: `${endPoint.default}/public-commerce-qr/commercial-code/${params.id}`,
        headers: { 'Content-Type': 'application/json', authorization:access}
      })
      if (res.status === 200) {
        const datos = res.data.data
        setName(datos.tradeName)
        setqr(datos.qrCode_base64)
        setLoading(false)
      }
    } catch (error) {
      alert('¡Ups! Ocurrió un problema')
    }
  }
  
  const downloadPdf = ():void => {
  }


  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef?.current?.executeAsync() as string
    await getQR(token)
    setMount(false)
  }

  useEffect(() => {
    if (mount) {
      onSubmitWithReCAPTCHA()
    }
  }, [mount])
 

  return (
    <main className="grid min-h-full place-items-center bg-white">
        <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              ref={recaptchaRef as React.RefObject<ReCAPTCHA>}
              size="invisible"
        />
      <div className="text-center">
      <header>
      <Image src="/assets/images/general/logo.png" alt="logo Izipay" width={200} height={100}  />
      </header>
      <div className="text-center mb-7">
        <h3 className="mb-5">Da clic para descargar el QR de tu comercio:</h3>
        <button onClick={downloadPdf} className="bg-transparent text-green_default py-2 px-4 border border-green_default-500 rounded">
          Descargar
        </button>
      </div>
      <div ref={qrRef as React.RefObject<HTMLElement>}>
        {sectionPdfQR({ name, qr, loading })}

      </div>
      </div>
    </main>
  )
}
