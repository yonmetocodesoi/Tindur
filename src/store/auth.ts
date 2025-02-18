import { create } from 'zustand';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  User
} from 'firebase/auth';
import { auth } from '../lib/firebase';

// Criar usuário admin
const createAdminUser = async () => {
  try {
    await createUserWithEmailAndPassword(auth, 'admin@admin.com', 'admin');
    console.log('Usuário admin criado com sucesso');
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Usuário admin já existe');
    } else {
      console.error('Erro ao criar usuário admin:', error);
    }
  }
};

// Criar usuário admin automaticamente
createAdminUser();

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  signIn: async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    set({ user: result.user });
  },
  signUp: async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    set({ user: result.user });
  },
  signInWithGoogle: async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    set({ user: result.user });
  },
  signOut: async () => {
    await firebaseSignOut(auth);
    set({ user: null });
  },
}));

// Listener para mudanças no estado de autenticação
auth.onAuthStateChanged((user) => {
  useAuthStore.setState({ user, loading: false });
});