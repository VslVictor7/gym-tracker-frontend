import { getCSRFTokenFromCookie, deleteCSRFTokenCookie } from './csrftoken';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const endpoints = {
  // GET
  workoutSessions: `${API_BASE}/api/workout-sessions/`,
  exercises: `${API_BASE}/api/exercises/`,
  body_weight: `${API_BASE}/api/body-weight/`,
  user_info: `${API_BASE}/accounts/user/info`,

  // POST
  login: `${API_BASE}/accounts/login/`,
  logout: `${API_BASE}/accounts/logout/`,
  signup: `${API_BASE}/accounts/signup/`,

};

export async function loginUser(username: string, password: string): Promise<void> {
  const response = await fetch(`${API_BASE}/accounts/login/`, {
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


export async function logoutUser(): Promise<void> {
  const csrfToken = getCSRFTokenFromCookie();
  if (!csrfToken) {
    console.error('CSRF Token is null or undefined.');
    return;
  }
  const response = await fetch(`${API_BASE}/accounts/logout/`, {
    method: 'POST',
    headers: {
      'X-CSRFToken': csrfToken,
    },
    credentials: 'include',
  });
  if (response.status !== 200) {
    console.error('Erro ao realizar logout:', status);
    return;
  }
  deleteCSRFTokenCookie();
}


export async function fetchUser(): Promise<{
    name: string;
    email: string;
    avatar: string;
  }> {
  const response = await fetch(`${API_BASE}/accounts/user/info`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const data = await response.json();
  return {
    name: data.username,
    email: data.email,
    avatar: `${API_BASE}${data.profile_picture}`,
  };
}

type WeightEntry = {
  date: string
  weight_morning: number
  weight_night: number
}

export async function fetchBodyWeight(): Promise<WeightEntry[]> {
  const response = await fetch(`${API_BASE}/api/body-weight/`, {
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include',
  })

  const result = await response.json()

  const filteredData = result.map((entry: WeightEntry) => ({
    date: entry.date,
    weight_morning: entry.weight_morning,
    weight_night: entry.weight_night,
  }))

  return filteredData
}