import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Auth/auth";

function HomePage() {
    const auth = useAuth()

    let notLoged = false
    if (auth.user) {
        notLoged = true
    }

    return(
    <div>
    <h1 className="homeTitle">Bienvenido a HyperBlog 2.0</h1>
    {notLoged && <p className="homeDescription">Tu blog personal de confianza donde podrás crear tus propios blogs</p>}
    {!notLoged && <p className="homeDescription">Tu blog personal de confianza donde 
    podrás crear tus propios blogs, {<Link to='/login'>Inicia sesion para continuar</Link>}</p>}
    <div className="courseContainer">
        <h2>Curso de React.js, navegación con React Router
        </h2>
        <p>HyperBlog 2.0 ha sido diseñado gracias a el curso de ReactJS - navegación
           con React Router en Platzi, de la mano del profesor JuanDC
        </p>
        <a href="https://platzi.com/cursos/react-router/?utm_source=juandc-web">Tomar el curso</a>
    </div>
    </div>
    
    )
}

export {HomePage}