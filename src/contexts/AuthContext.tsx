import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '@/data/types';
import { users, DEMO_PASSWORD } from '@/data/users';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  loginAsDemo: (userId: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('totvs_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('totvs_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (password !== DEMO_PASSWORD) {
      setIsLoading(false);
      return { success: false, message: 'Senha inválida. Use "demo123" para qualquer usuário.' };
    }

    const foundUser = users.find(u => u.email === email);
    if (!foundUser) {
      setIsLoading(false);
      return { success: false, message: 'Usuário não encontrado. Verifique o email.' };
    }

    setUser(foundUser);
    localStorage.setItem('totvs_user', JSON.stringify(foundUser));
    localStorage.setItem('totvs_token', `fake_token_${foundUser.id}`);
    setIsLoading(false);
    
    return { success: true };
  };

  const loginAsDemo = (userId: string) => {
    const demoUser = users.find(u => u.id === userId);
    if (demoUser) {
      setUser(demoUser);
      localStorage.setItem('totvs_user', JSON.stringify(demoUser));
      localStorage.setItem('totvs_token', `fake_token_${demoUser.id}`);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('totvs_user');
    localStorage.removeItem('totvs_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, loginAsDemo, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};