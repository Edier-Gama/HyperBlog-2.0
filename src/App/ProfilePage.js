import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/auth";
function ProfilePage() {
    const auth = useAuth()
    const userData = localStorage.getItem('USER')
    const user = JSON.parse(userData)
    const navigate = useNavigate()
    function onEdit(){
        navigate('/edit-profile')
    }
    return(
        <div className="profile">
            <img 
            className="profile-foto"
            width='130px'
            src="https://i.pinimg.com/originals/63/c0/54/63c054fe3af6cc5e37bba5655a32a6a0.jpg"
            />
            <p>{'Bienvenido a tu perfil ' + user.username}</p>
            <button onClick={onEdit}>Editar nombre</button>
        </div>
    )
}

export {ProfilePage}