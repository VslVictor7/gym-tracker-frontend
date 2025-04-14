import { endpoints } from '@/backend/endpoints'

export interface LoginResponse {
    access: string;
    refresh: string;
  }
  
  export async function loginUser(username: string, password: string): Promise<LoginResponse> {
    const response = await fetch(endpoints.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error('Usuário ou senha incorretos');
    }
  
    return await response.json();
  }
  