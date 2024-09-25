import { useState } from 'react';
import './index.scss'
import axios from 'axios'




export default function Login (){


    const[email,setEmail] = useState('');
    const[senha, setSenha] = useState('');
  

    async function cadastrarUsuario(event) {
        event.preventDefault()
      
        if(senha != '' && email != ''){  // para evitar cadastros vazios e spam
       
            let url ='http://localhost:3001/cadastro/usuario' // url da minha api
    
            let resp = await axios.post(url, {email, senha})

            alert('usuario cadastrado com sucesso')

            if(resp.status == 200){      // faz uma simples checagem
                console.log('cadastro realizado')
                alert('usuario cadastrado')
                window.location.href ='/home'  // redireciona para a pagina principal
            }
        }
            
    }


    return(
        <div className="login-page">
            <div className="content">
                <form className='box' onSubmit={cadastrarUsuario}>
                    <h1>Registre-se</h1>
                    <label htmlFor="email"></label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Digite seu email' name="email"  />
                    <label htmlFor="password"></label>
                    <input value={senha} onChange={e => setSenha(e.target.value)} placeholder='Digite sua Senha'  type="password" name="password"  /> 
                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

