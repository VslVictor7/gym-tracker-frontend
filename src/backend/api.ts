const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const endpoints = {
  workoutSessions: `${API_BASE}/api/workout-sessions/`,
  exercises: `${API_BASE}/api/exercises/`,
  users: `${API_BASE}/api/users/`,

  login: `${API_BASE}/accounts/token/`,
  signup: `${API_BASE}/accounts/signup/`,
  token_refresh: `${API_BASE}/accounts/token/refresh/`,

};
