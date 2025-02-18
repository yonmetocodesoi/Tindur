import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, LogIn } from 'lucide-react';
import { useAuthStore } from '../store/auth';
import toast from 'react-hot-toast';

export default function Home() {
  const { signInWithGoogle, user } = useAuthStore();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/dashboard');
      toast.success('Login realizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao fazer login com Google');
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Header com botão de login */}
      <header className="absolute top-0 right-0 p-6 z-10">
        {user ? (
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            <img
              src={user.photoURL || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop'}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span>Dashboard</span>
          </Link>
        ) : (
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors shadow-lg"
          >
            <LogIn className="w-5 h-5" />
            Entrar com Google
          </button>
        )}
      </header>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-16 h-16 mx-auto text-white mb-8" />
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              Future Match
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Descubra conexões significativas em um mundo digital. 
              Encontre pessoas que compartilham seus interesses e valores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-x-4"
          >
            {!user && (
              <>
                <button
                  onClick={handleGoogleLogin}
                  className="inline-block px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-lg"
                >
                  Começar Agora
                </button>
                <Link
                  to="/auth?mode=login"
                  className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Saiba Mais
                </Link>
              </>
            )}
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            {[
              {
                title: "Matches Inteligentes",
                description: "Algoritmo avançado que encontra pessoas compatíveis com seus interesses."
              },
              {
                title: "Conexões Reais",
                description: "Foco em criar relacionamentos significativos e duradouros."
              },
              {
                title: "Privacidade Garantida",
                description: "Sua segurança e privacidade são nossas principais prioridades."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}