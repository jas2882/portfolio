// import '../Blog/Blog.css';
import image from '../../Assets/Img/Raw/group-photo-trail-ride.jpeg'
import React from 'react';
import {Header, Details, ArticleBody, SocialBlock} from './blog-components';
import BlogAPI from '../../API/BlogAPI';
import Sidebar from '../sidebar/SideBar';
import '../../SCSS/Pages/_blog/'

const Post = (...BlogApi) => {

  const newData = BlogAPI[0];
// console.log(image)
  return (

    <div className="blog-wrapper">


      <div className="blog-post col-sm-8 text-left">
        <Header data={newData} blogImage={image} imgAlt="hello"/>
        <Details data={newData}/>
        <ArticleBody data={newData}/>
        <SocialBlock/>
      </div>

    </div>
  )
}

export const BlogPage = (props) => {

  return (
    <>
      <Sidebar id={'left'}/>
      <Post/>
      <Sidebar id={'right'}/>
    </>
  )
}