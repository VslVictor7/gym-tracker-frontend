"use client";

import Link from 'next/link';
import React from 'react';


export default function SignupPage() {
  const [user, setUser] = React.useState({
    username: '',
    password: '',
  })

  const onSignup = async () => {

  }
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Signup</h1>
      <hr></hr>
      <label htmlFor="username">Usuário</label>
      <input
          className="border border-gray-300 rounded px-2 py-1 mb-4"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Usuário">
      </input>
      <label htmlFor="password">Senha</label>
      <input
          className="border border-gray-300 rounded px-2 py-1 mb-4"
          id="password"
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Senha">
      </input>
      <button 
        className="bg-blue-500 text-white rounded px-4 py-2 mb-4" 
        onClick={onSignup}>Cadastrar
      </button>
      <Link href="/login">Já tem uma conta? Faça login</Link>

    </div> 
  )
}