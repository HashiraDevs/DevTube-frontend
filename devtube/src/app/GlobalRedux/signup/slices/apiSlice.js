import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery:fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        addUsers: builder.mutation({
            query: (value) => ({
                url: '/auth/users',
                method: 'POST',
                body: value 
            }),
            async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                  api.util.updateQueryData('getPost', id, (draft) => {
                    Object.assign(draft, patch)
                  })
                )
                try {
                  await queryFulfilled
                } catch {
                    dispatch(api.util.invalidateTags(['Users']));
        
                }
              },
        })
    })
})

export const {
    useAddUsersMutation
} = apiSlice