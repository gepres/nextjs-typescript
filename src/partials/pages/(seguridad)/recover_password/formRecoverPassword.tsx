'use client';

import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Input } from "@chakra-ui/react";
import { useState } from "react"

export const FormRecoverPassword = () => {
  const [input, setInput] = useState('')
  const [isError, setisError] = useState(false)
  const [isRequired, setisRequired] = useState(true)

  const handleInputChange = (e: string | any) => {
    let value = e.target.value
    setInput(e.target.value) 
    console.log('value',value.length);
    
    if (value.length > 0) {
      setisError(false)
    } else {
      setisError(true)
    }
  }


  return (
    <div className="flex justify-center flex-col items-center pt-10">
      ormRecoverPassword

      <div className="w-[500px]">
        {JSON.stringify(isError)}
        <FormControl isInvalid={isError} isRequired={isRequired}>
        <FormLabel><span className="text-blue_default">Usuario:</span></FormLabel>
        <Input focusBorderColor="blue_default" type='text' variant='filled' value={input} onChange={handleInputChange} />
        {isError ? (
          <FormErrorMessage>Campo es requerido</FormErrorMessage>
        ) : (
         <></>
        )}
      </FormControl>
      </div>
    </div>
  )
}
