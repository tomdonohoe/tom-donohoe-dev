import React from 'react'
import containerStyles from './PostContainer.module.css'

const PostContainer = ({ children }) => {
  return <div className={containerStyles.postContainer}>{children}</div>
}

export default PostContainer