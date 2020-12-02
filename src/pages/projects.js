import React from 'react'
import PostContainer from '../components/Container/PostContainer.js'
import Projects from '../components/Projects/Projects.js'

const PostsPage = () => {
    return (
      <PostContainer>
        <h1>Latest projects</h1>
        <Projects/>
      </PostContainer>
    )
}

export default PostsPage