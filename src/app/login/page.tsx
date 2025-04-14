'use client'

import Image from 'next/image'
import {useState} from 'react'
import {motion} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/backend/login'

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
  
    try {
      const data = await loginUser(username, password);
  
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
  
      router.push('/signup');
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Usuário ou senha incorretos.');
    }
  }

  return  (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#121619]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md">
          <div className='rounded-2xl shadow-xl p-8 space-y-6 bg-[#1c2127] border border-[#2c2f33]'>
            <div className='text-center space-y-2'>

              <h1 className="text-3xl font-bold tracking-tighter text-white">
                Olá!{" "}
                <Image
                  src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"
                  width={24}
                  height={24}
                  alt="hi"
                  className="inline-block ml-1 translate-y-[-3px]"
                />
              </h1>
              <p className='text-gray-200'>Insira suas credenciais para entrar</p>

            </div>
            <form className='space-y-4' onSubmit={handleLogin}>
              <div className='space-y-2'>
                <Label htmlFor='username' className="text-white">Usuário</Label>
                <Input
                  id='username'
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="text-white">
                  </Input>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password' className="text-white">Senha</Label>
                <div className='relative'>

                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="text-white"
                  ></Input>
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
                  >
                    {showPassword ? <EyeOff className='text-white' /> : <Eye className='text-white' />}
                  </button>
                </div>
              </div>
              <Button className='w-full cursor-pointer bg-[#9004c4]' type='submit'>
                Entrar
              </Button>
            </form>
          </div>
      </motion.div>
    </div>
  );
  
}