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
    }),
    refresh:builder.mutation({
      query:(refreshToken)=>({
        url:'api/token/refresh/',
        method:'POST',
        body:refreshToken,
      })
    })
  })
})

export const { useLoginMutation,useRefreshMutation } = tokenApiSlice