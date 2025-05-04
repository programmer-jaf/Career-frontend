import React from 'react'
import HeroSection from '../sections/Blogs/HeroSection'
import HeroBlogSection from '../sections/Blogs/HeroBlogSection'
import LatestBlogs from '../sections/Blogs/LatestBlogs'
import Subscription from '../components/Subscription'

const BlogsPage = () => {
  return (
    <div>
      <HeroSection/>
      <HeroBlogSection/>
      <LatestBlogs/>
      <Subscription/>
    </div>
  )
}

export default BlogsPage
