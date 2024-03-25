'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react';
interface GeneralState {
  backoffice_url?: string;
  base_url_s3?:string,
  endPoint: {
    default: string | undefined
  },
  roles_estaticos:object
}


const initialState:GeneralState = {
  backoffice_url: process.env.NEXT_PUBLIC_BACKOFFICE_BASE_URL,
  base_url_s3: process.env.NEXT_PUBLIC_BASE_URL_S3,
  endPoint:{
    default:  process.env.NEXT_PUBLIC_BASE_URL_FRONT
  },
  roles_estaticos: {
    static_role_admin_izipay: 'izipay-admin',
    static_role_admin_adverting: 'izipay-advertising',
    static_role_supervisor_izipay: 'izipay-supervisor',
    static_role_operator_izipay: 'izipay-operator',
    static_role_admin_ce: 'company-ce-admin',
    static_role_admin_pgs: 'company-pgs-admin',
    static_role_operator: 'company-operator',
    static_role_admin_micuenta: 'company-micuenta-admin'
  },
}

const GeneralSlice = createSlice({
  name: 'General',
  initialState,
  reducers: {
  
  }
});

export const {} = GeneralSlice.actions

export default GeneralSlice.reducer;