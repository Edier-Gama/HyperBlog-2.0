import React from "react";
import { useNavigate } from "react-router-dom";

function EditProfile(){
    const [username, setUser] = React.useState()
    const navigate = useNavigate()
    const onChange = (event) => {
        setUser(event.target.value)
    }
    const newData = {username: username, role: {}}
    const changeUser = () => {
        localStorage.setItem('USER', JSON.stringify(newData))
        navigate(-1)
    }

    return(
        <div className="changeName">
            <label>Ingresa un nuevo nombre</label><br></br>
            <input onChange={(event) => onChange(event)}/><br/>
            <button onClick={changeUser}>Cambiar nombre</button><br/>
            <button onClick={() => navigate(-1)}>volver</button>
        </div>
    )
}

export {EditProfile}