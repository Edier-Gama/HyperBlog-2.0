import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

function LogInPage() {
  const navigate = useNavigate()
  const auth = useAuth(); 
  const [username, setUsername] = React.useState('');
  
  
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    return <Navigate to='/'/>
  }
  
  return (
    <section className='formContainer'>
      <form onSubmit={login}>
      <h1>Inicio de sesion</h1>
        <label>Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='Escribe tu nombre'
        /><br/>
        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}

export { LogInPage };