import { endpoints } from '@/backend/endpoints'

export async function logoutUser(): Promise<void> {
  const response = await fetch(endpoints.logout, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Erro ao fazer logout');
  }
}