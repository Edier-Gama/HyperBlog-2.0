import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useFakeUser() {
    const [username, setUser] = React.useState()
    return{username, setUser}
}

function EditFakeProfile(){
    const {username, setUser} = useFakeUser()
    const navigate = useNavigate()
    const location = useLocation()
    const onChange = (event) => {
        setUser(event.target.value)
    }
    const changeUser = () => {
        navigate('/profile/'+ username)
    }

    return(
        <div className="changeName">
            <label>Ingresa un nuevo nombre</label><br></br>
            <input onChange={(event) => onChange(event)}/><br/>
            <button onClick={changeUser}>Cambiar nombre</button>
            <button onClick={() => navigate(-1)}>volver</button><br/>
        </div>
    )
}

export {EditFakeProfile, useFakeUser}