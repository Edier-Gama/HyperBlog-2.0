import React from "react";
import { Link, Outlet, useAsyncValue} from "react-router-dom";
import { useAuth } from "../Auth/auth";

function updateLocalStorage(){
    let blogs; 
    const localStorageBlogs = localStorage.getItem('EJEMPLOO');
    if (!localStorageBlogs) {
        localStorage.setItem('EJEMPLOO', JSON.stringify([]))
    }else{
        blogs = JSON.parse(localStorageBlogs)
    }
    return blogs
}

function BlogPage() {
    const localStorageUsers = localStorage.getItem('USER')
    const userType = JSON.parse(localStorageUsers)
    const auth = useAuth()
    updateLocalStorage()
    const blogs = updateLocalStorage()
        
        return(
            
            <div className="blogpage-container">
              <h2>Bienvenido al blog {userType.username}
              </h2>
              <h3>Lista de blogs</h3>
              <Link to='/blog/create-blog' className="createBlog">Crear nuevo blog</Link>
                <ul className="blog-container">
                <Outlet/>
                {blogs.map(blog => (
                   <BlockLink blog={blog} key={blog.slug}/>
                ))}
                </ul>
            </div>
        )
    }


function BlockLink({blog}) {
    return (
        <li>
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </li>
    )
}


export {BlogPage}