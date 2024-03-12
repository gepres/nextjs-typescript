'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react';
interface BreakpointsState {
  mobile:Boolean
}


const initialState:BreakpointsState = {
  mobile: false
}

const BreakpointsSlice = createSlice({
  name: 'Breakpoints',
  initialState,
  reducers: {
    mobileDevice(state) {
      if (typeof window !== 'undefined') {
        // console.log(mobileDevice())
      }
    }

  }
});

export const {mobileDevice } = BreakpointsSlice.actions

export default BreakpointsSlice.reducer;