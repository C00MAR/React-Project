import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    tagTypes: ['products'],
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
            providesTags: ['products']
        }),
        createArticle: builder.mutation({
            query: (data) => ({
                url: `/products`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['products']
        })
    }),
})

export const { useGetProductsQuery, useCreateArticleMutation } = productApi