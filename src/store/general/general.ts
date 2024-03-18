'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react';
interface BreakpointsState {
  backoffice_url?: string;
  base_url_s3?:string,
  endPoint: object,
  roles_estaticos:object
}


const initialState:BreakpointsState = {
  backoffice_url: process.env.BACKOFFICE_BASE_URL,
  base_url_s3: process.env.BASE_URL_S3,
  endPoint:{
    default: process.env.BASE_URL_FRONT
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

const BreakpointsSlice = createSlice({
  name: 'Breakpoints',
  initialState,
  reducers: {
  
  }
});

export const {} = BreakpointsSlice.actions

export default BreakpointsSlice.reducer;