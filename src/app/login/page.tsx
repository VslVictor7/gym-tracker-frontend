'use client'

import {useState} from 'react'
import {motion} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { endpoints } from '@/backend/api'

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
  
    try {
      const response = await fetch(endpoints.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }
  
      const data = await response.json();
      console.log('Login com sucesso:', data);
  
      // Aqui você pode salvar o token no localStorage ou em um contexto
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
  
      // Redirecionar ou atualizar estado
      // Ex: router.push('/dashboard')
  
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Usuário ou senha incorretos.');
    }
  }

  return  (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
          <div className='bg-white rounded-2xl shadow-xl p-8 space-y-6'>
            <div className='text-center space-y-2'>

              <h1 className="text-3xl font-bold tracking-tighter">Gym Tracker</h1>
              <p className='text-muted-foreground'>Entre suas credenciais para acessar</p>

            </div>
            <form className='space-y-4' onSubmit={handleLogin}>
              <div className='space-y-2'>
                <Label htmlFor='username'>Usuário</Label>
                <Input
                  id='username'
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required></Input>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>Senha</Label>
                <div className='relative'>

                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></Input>
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
              <Button className='w-full' type='submit'>
                Entrar
              </Button>
            </form>
          </div>
      </motion.div>
    </div>
  );
  
}