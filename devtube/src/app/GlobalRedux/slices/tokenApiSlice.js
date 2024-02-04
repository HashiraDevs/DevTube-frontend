'use client'
import { apiSlice } from "./apiSlice";

export const tokenApiSlice = apiSlice.injectEndpoints({
  endpoints:(builder) =>({
    login:builder.mutation({
      query:(credentials)=>({
        url:'api/token/',
        method:'POST',
        body:credentials,
      })
    })
  })
})

export const { useLoginMutation } = tokenApiSlice