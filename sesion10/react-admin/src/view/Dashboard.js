import React, { useState, useEffect } from 'react'
import PostList from '../components/PostsList'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'

const Dashboard = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/3/posts')
      const data = await res.json()
      setPosts(data)
    }
    getPosts()
  }, [])

  return (
    <>
      <h3>Dashboard view</h3>
      <Component1 />
      <Component2 />
      <Component3 />
      <PostList data={posts} />
    </>
  )
}

export default Dashboard