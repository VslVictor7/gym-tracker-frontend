'use client'

import Image from 'next/image'
import {useState} from 'react'
import {motion} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/backend/endpoints'

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
  
    try {

      await loginUser(username, password);
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Usuário ou senha incorretos.');
      setIsLoading(false);
    }
  }

  return  (

    <div className="bg-white min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <div className="rounded-2xl shadow-xl p-8 space-y-6 bg-white relative">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-gray-900">
              Olá!{' '}
              <Image
                src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"
                width={24}
                height={24}
                alt="hi"
                className="inline-block ml-1 translate-y-[-3px]"
              />
            </h1>
            <p className="text-gray-700">Insira suas credenciais para entrar</p>
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-900">
                Usuário
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="text-gray-900 border border-[#e9e9e9]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-900">
                Senha
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-gray-900 border border-[#e9e9e9]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="text-gray-900" /> : <Eye className="text-gray-900" />}
                </button>
              </div>
            </div>
            <Button
              className="w-full cursor-pointer bg-[#000000] text-white hover:bg-[#333333]"
              type="submit"
            >
              Entrar
            </Button>
          </form>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white/70 flex flex-col items-center justify-center rounded-2xl backdrop-blur-sm z-10"
            >
              <Image
                src="/ring-resize.svg"
                width={50}
                height={50}
                alt="Carregando"
                className="mb-4"
              />
              <p className="text-gray-700 text-lg">Carregando...</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>

  );
  
}