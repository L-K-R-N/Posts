import { useMemo } from "react";
import { IPost } from "../models/IPost";

export const useSortedPosts = (posts: IPost[], sort: string) => {
    const sortedPosts = useMemo(() => {
        return (sort) ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) : posts;
        }, [sort, posts])
 
      return sortedPosts;
}

export const usePosts = (posts: IPost[], sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])

      return sortedAndSearchedPosts;
}