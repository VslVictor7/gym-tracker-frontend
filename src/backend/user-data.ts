import { endpoints } from '@/backend/endpoints';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function fetchUser(token: string): Promise<{
    name: string;
    email: string;
    avatar: string;
  }> {
    const response = await fetchUserInfo(token);
  
    const data = await response.json();
    return {
      name: data.username,
      email: data.email,
      avatar: `${API_BASE}${data.profile_picture}`,
    };
}

async function fetchUserInfo(token: string) {
    return await fetch(endpoints.user_info, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    });
}