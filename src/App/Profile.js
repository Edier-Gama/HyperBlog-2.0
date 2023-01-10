import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Auth/auth";
import { useFakeUser } from "./EditFakeProfile";


function Profile() {
    const {slug} = useParams()
    const auth = useAuth()
    const navigate = useNavigate()
    const {username} = useFakeUser()
    let canEdit;
    if (auth.user.username === slug || auth.user.role.isTeacher) {
        canEdit = true
    }
    function editProfile(event){
        navigate('/edit-fake-profile/' + slug)
    }
    return(
        <div className="profile">
            <img 
            className="profile-foto"
            width='130px'
            src="https://i.pinimg.com/originals/63/c0/54/63c054fe3af6cc5e37bba5655a32a6a0.jpg"
            />
            <p>{'Bienvenido al perfil de: ' + slug}</p>
            {canEdit && <button onClick={(event) => editProfile(event)}>Editar nombre</button>}
        </div>
    )
}


export {Profile}