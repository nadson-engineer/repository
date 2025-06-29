import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";



const Login = () => {

    const [username, setusername] = useState('')
    const [userpassword, setuserpassword] = useState('')

    const handleSumit = (event) => {
        event.preventDefault();
        alert('Você entrou, parabéns' + username + userpassword)
    }

  return (
    <div className='container'>

        <form onSubmit={handleSumit}>
            <h1>Acesse o sistema</h1>
            <div className='input-field'>
            <input type="email" placeholder='E-mail' onChange={(e) => setusername(e.target.value)}/>
            <FaUser className="icon" />
            </div>
            <div className='input-field'>
            <input type="password" placeholder="senha" onChange={(e) => setuserpassword(e.target.value)} />
            <FaLock className='icon' />
            </div>
            
            <div className='recall-forget'>
            <label>
                <input type="checkbox"/>
                Lembre de mim 
            </label>
            <a href="#">Esqueceu a senha?</a>
            </div>
            
            <button className='login'>Entrar</button>

            <div className='signup-link'>
                <p>
                    Não tenho uma conta? <a href="#">Registrar</a>
                </p>
            </div>
        </form>
      
    </div>
  )
}

export default Login
