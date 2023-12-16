
import  {useEffect, useState} from "react";
import '../styles/App.css';
import {PostList} from "../components/PostList";
import {MyButton} from "../components/UI/button/MyButton";
import {PostForm} from "../components/PostForm";
import {PostFilter} from "../components/PostFilter";
import {MyModal} from "../components/UI/modal/MyModal";
import { usePosts } from "../hooks/usePosts";
import { Loader } from "../components/UI/loader/Loader";
import { getTotalPages } from "../utils/pages";
import { Pagination } from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import {MySelect} from "../components/UI/select/MySelect";
import { IPost } from "../models/IPost";
import { useGetAllPostsQuery } from "../services/PostApi";
import {useRef} from 'react'
import { IFilter } from "../models/IFilter";



export const Posts = () => {
  const [limit, setLimit] = useState('10')
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState<IPost[]>([])
  const [filter, setFilter] = useState<IFilter>({sort: 'title', query: ''});
  const {data: postsData, isLoading, isError, error} = useGetAllPostsQuery({limit: Number(limit), page})
  const removePost = (post: IPost) => setPosts(posts.filter(p => p.id !== post.id))
  const sortedAndSearchedPosts = usePosts(posts || postsData, filter.sort, filter.query)
  const lastElement = useRef<HTMLDivElement | null>(null)
  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const [modal, setModal] = useState(false)

  const [totalPages, setTotalPages] = useState(0)
  
  

  const changePage = (page: number) => {
    setPage(page)
  }



  useObserver(lastElement)


  useEffect(() => {
    if (postsData) {
      setPosts([...posts, ...postsData])
    }
    
    const totalCount = posts.length;
    setTotalPages(getTotalPages(totalCount, Number(limit)))

  }, [page, limit, postsData])

  return (
      <div className="posts">
        <MyButton onClick={() => setModal(true)}>Добавить пост</MyButton>
        <hr style={{margin: '10px 0'}}/>
        <MyModal children={<PostForm create={createPost}/>} visible={modal} setVisible={setModal}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <MySelect
            title="limit"
            value={limit}
            onChange={setLimit}
            defaultOption="кол-во постов на странице"
            options={[
              {value: 5, name: '5'},
              {value: 10, name: '10'},
              {value: 25, name: '25'},
              {value: -1, name: 'Показать все'}
            ]}/>
        {isError &&
          <h3 style={{textAlign: 'center'}}>Произошла ошибка {("message" in error) ? error.message : ''}</h3> 
        }
        {isLoading && 
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div> 
        }
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS"/>
        <div ref={lastElement}></div>
        
        <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
      </div>
  )
}

