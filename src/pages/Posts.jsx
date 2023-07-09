
import React, {useEffect, useRef, useState} from "react";
import '../styles/App.css';
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { Loader } from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getTotalPages } from "../utils/pages";
import { Pagination } from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

const Posts = () => {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id))
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const [modal, setModal] = useState(false)

  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const lastElement = useRef()
  

  const [isPostsLoading, fetchPosts, postsError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getTotalPages(totalCount, limit))
  })

  const changePage = (page) => {
    setPage(page)
  }



  useObserver(lastElement, isPostsLoading, page < totalPages, () => {
    setPage(page + 1)  
  })


  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  return (
      <div className="posts">
        <MyButton style={{marginTop: '10px'}} onClick={() => setModal(true)}>Добавить пост</MyButton>
        <hr style={{margin: '10px 0'}}/>
        <MyModal children={<PostForm create={createPost}/>} visible={modal} setVisible={setModal}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <MySelect
            value={limit}
            onChange={value => setLimit(value)}
            defaultOption="кол-во постов на странице"
            options={[
              {value: 5, name: '5'},
              {value: 10, name: '10'},
              {value: 25, name: '25'},
              {value: -1, name: 'Показать все'}
            ]}
              
            
              
            
        >
        </MySelect>
        {postsError &&
          <h3 style={{textAlign: 'center'}}>Произошла ошибка {postsError}</h3> }
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS"/>
          <div ref={lastElement}></div>
        {isPostsLoading && 
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div> 
        }
        <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
      </div>
  )
}

export default Posts;