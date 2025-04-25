export function getCSRFTokenFromCookie(): string | null {
    const match = document.cookie.match(/csrftoken=([^;]+)/);
    return match ? match[1] : null;
}

export function deleteCSRFTokenCookie(): void {
    document.cookie = 'csrftoken=; Max-Age=0; path=/';
  }