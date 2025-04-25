const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const endpoints = {
  workoutSessions: `${API_BASE}/api/workout-sessions/`,
  exercises: `${API_BASE}/api/exercises/`,

  login: `${API_BASE}/accounts/login/`,
  logout: `${API_BASE}/accounts/logout/`,
  user_info: `${API_BASE}/accounts/user/info`,
  signup: `${API_BASE}/accounts/signup/`,

};
