import React from 'react'
import PostContainer from '../components/Container/PostContainer.js'
import Posts from '../components/Posts/Posts.js'
import Bio from '../components/Bio/Bio.js'


const PostsPage = () => {
    return (
      <PostContainer>
        <h1>Latest posts</h1>
        <Posts/>
      </PostContainer>
    )
}

export default PostsPage