import { endpoints } from './endpoints';
import { getCSRFTokenFromCookie, deleteCSRFTokenCookie } from './csrftoken';


export async function logoutUser(): Promise<void> {

  const csrfToken = getCSRFTokenFromCookie();

  if (!csrfToken) {
    console.error('CSRF Token is null or undefined.');
    return;
  }

  const status = await performLogout(csrfToken);

  if (status !== 200) {
    console.error('Erro ao realizar logout:', status);
    return;
  }

  deleteCSRFTokenCookie();

}


async function performLogout(csrfToken: string): Promise<number> {
  const response = await fetch(endpoints.logout, {
    method: 'POST',
    headers: {
      'X-CSRFToken': csrfToken,
    },
    credentials: 'include',
  });

  return response.status;
}