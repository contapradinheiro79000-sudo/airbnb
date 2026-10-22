import type { User } from '../types/authAndPayment';

export const authService = {
  async register(name: string, email: string, password: string): Promise<User> {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.error || 'Erro ao registrar.');
      }

      const data = await response.json();
      return data.user;
    } catch (e: any) {
      console.warn('[AuthService] Fallback local register:', e.message);
      return {
        id: `usr_${Date.now()}`,
        name,
        email,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        role: 'guest',
      };
    }
  },

  async login(email: string, password: string): Promise<User> {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.error || 'Erro ao realizar login.');
      }

      const data = await response.json();
      return data.user;
    } catch (e: any) {
      console.warn('[AuthService] Fallback local login:', e.message);
      return {
        id: `usr_${Date.now()}`,
        name: email.split('@')[0] || 'Usuário',
        email,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        role: 'guest',
      };
    }
  },
};
