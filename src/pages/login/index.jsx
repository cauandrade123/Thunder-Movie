import { useState } from 'react'
import './index.scss'



export default function Login (){


    // logica de negócio quando o usuario se cadastrar e der certo




    return(
        <div className="login-page">
            <div className="content">
                <div className="box">
                    <h1>Registre-se</h1>
                    <label htmlFor="email"></label>
                    <input type="email" placeholder='Digite seu email' name="email" id="" />
                    <label htmlFor="password"></label>
                    <input placeholder='Digite sua Senha'  type="password" name="password" id="" /> 
                    <button>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}