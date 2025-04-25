import { endpoints } from '@/backend/endpoints';

export async function loginUser(username: string, password: string): Promise<void> {

  const response = await fetch(endpoints.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Usuário ou senha incorretos');
  }
}