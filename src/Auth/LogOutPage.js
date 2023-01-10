import React from "react";
import { useAuth } from "./auth";

function LogOutPage() {
    const auth = useAuth()
    const logout = (event) => {
        event.preventDefault()
        auth.logout()
    }
    return(
        <div className="formContainer-logout">
            <h1>cerrar sesion</h1>
            <form onSubmit={logout}>
                <label>Estás a punto de salir del mejor blog del mundo, 
                ¿Estás seguro/a?</label><br/>
                <button type="submit">salir</button>
            </form>
        </div>
    )
}

export {LogOutPage}