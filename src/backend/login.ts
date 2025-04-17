import { endpoints } from '@/backend/endpoints'

export async function loginUser(username: string, password: string): Promise<string> {
  const response = await fetch(endpoints.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include', // necessário para enviar o cookie HTTP-only
  });

  if (!response.ok) {
    throw new Error('Usuário ou senha incorretos');
  }

  const data = await response.json();
  return data.access; // retorna apenas o access token
}
