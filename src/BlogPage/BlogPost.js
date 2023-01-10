import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Auth/auth";

function BlogPost() {

    const { slug } = useParams()
    const navigator = useNavigate()
    const localStorageData = localStorage.getItem('EJEMPLOO')
    const localStorageUsers = localStorage.getItem('USER')
    const userType = JSON.parse(localStorageUsers)
    const blogs = JSON.parse(localStorageData)
    const blogpost = blogs.find(blog => blog.slug === slug)
    
    let canDelete;
    if (userType.role.isTeacher || userType.username === blogpost.author) {
       canDelete = true
    }
    function onBack() {
        navigator('/blog')
    }
      

    const deleteBlog = (slug) => {
        const index = blogs.findIndex(blog => blog.slug === slug);
        if (index !== -1) {
        blogs.splice(index, 1);
        }
        localStorage.setItem('EJEMPLOO', JSON.stringify(blogs))
        onBack()
    }

    return (
        <div className="blogpost">
            <h1>{blogpost.title}</h1>
            <p>Escrito por: {blogpost.author}</p>
            <div className="blog-content">
            <p>{blogpost.content}</p>
            </div>
            <button onClick={onBack}>volver al blog</button>
            {canDelete && 
            (<button 
                onClick={() => deleteBlog(blogpost.slug)}
                >Eliminar blogpost
            </button>)
            }
        </div>
    )

}

export {BlogPost}