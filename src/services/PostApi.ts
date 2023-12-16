import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../models/IPost'
import { IParams } from '../models/IParams'
import { IComment } from '../models/IComment'


export const PostApi = createApi({
    reducerPath: 'PostApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/posts'}),
    endpoints: (builder) => ({
        getAllPosts: builder.query<IPost[], IParams>({
            query(params) {
                return {
                   url: '',
                   params: {
                    _limit: params.limit,
                    _page: params.page
                   }
                }
            }
        }),
        getPostById: builder.query<IPost, number>({
            query(id) {
                return {
                    url: `/${id}`,
                    
                }
            } 
        }),
        getComments: builder.query<IComment[], number>({
            query(id) {
                return {
                    url: `/${id}/comments`,

                }
            }
        })
    })
})


export const {
    useGetAllPostsQuery,
    useGetCommentsQuery,
    useGetPostByIdQuery
} = PostApi