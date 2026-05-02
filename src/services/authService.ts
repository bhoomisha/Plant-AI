const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const DEMO_USERS = [
  { email: 'demo@plantai.com', password: 'demo1234', name: 'Demo User' },
  { email: 'test@plantai.com', password: 'test1234', name: 'Test User' },
];

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthUser> {
    await delay(1200 + Math.random() * 600);

    const user = DEMO_USERS.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Invalid email or password. Try demo@plantai.com / demo1234');
    }

    return {
      id: Math.random().toString(36).substr(2, 9),
      name: user.name,
      email: user.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`,
    };
  },

  async signup(data: SignupData): Promise<AuthUser> {
    await delay(1500 + Math.random() * 500);

    if (data.password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }

    return {
      id: Math.random().toString(36).substr(2, 9),
      name: data.name,
      email: data.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.email}`,
    };
  },
};
