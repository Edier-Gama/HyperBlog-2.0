import React from "react";
import { useNavigate } from "react-router-dom";
import '../BlogPage/blog.css'


function CreateBlogView() {
    const [blogTitle, setBlogTitle] = React.useState()
    const [blogContent, setBlogContent] = React.useState()
    const localStorageUsers = localStorage.getItem('USER')
    const userType = JSON.parse(localStorageUsers)
    const navigate = useNavigate()
    const onChangeTitle = (event) => {
      setBlogTitle(event.target.value)
    }
    const onChangeContent = (event) => {
      setBlogContent(event.target.value)
      
    }

    function onBack() {
      navigate('/blog')
      window.location.reload()
    }
    
    function createBlog() {
      const localStorageData = localStorage.getItem('EJEMPLOO')
      const localStorageBlogs = JSON.parse(localStorageData)
      localStorageBlogs.push({
         title: blogTitle, 
         content: blogContent, 
         slug: blogTitle, 
         author: userType.username
      })
      localStorage.setItem('EJEMPLOO', JSON.stringify(localStorageBlogs));
      onBack()
    }

    return(
      <form onSubmit={createBlog} className='form'>
        <label>Escribe el titulo de tu nuevo Blog</label><br/>
        <input onChange={(event) => onChangeTitle(event)} 
        className='blogTitle' required/><br/>
        <label>Escribe el contenido de tu Blog</label><br/>
        <textarea 
        className='blogContent'
        onChange={(event) => {onChangeContent(event)}}>
        </textarea><br/>
        <button type="submit" className="newPost">CREAR BLOG</button>
        <button onClick={onBack} className="newPost">VOLVER</button>
      </form>
    )
}
export {CreateBlogView}
