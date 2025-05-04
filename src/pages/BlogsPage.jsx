import React from 'react'
import HeroSection from '../sections/Blogs/HeroSection'
import HeroBlogSection from '../sections/Blogs/HeroBlogSection'
import LatestBlogs from '../sections/Blogs/LatestBlogs'

const BlogsPage = () => {
  return (
    <div>
      <HeroSection/>
      <HeroBlogSection/>
      <LatestBlogs/>
    </div>
  )
}

export default BlogsPage
