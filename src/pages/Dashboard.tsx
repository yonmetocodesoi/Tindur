import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, User, LogOut, Search } from 'lucide-react';
import { useAuthStore } from '../store/auth';
import toast from 'react-hot-toast';

function FloatingHearts() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 5 + 10 + 's';
      heart.style.opacity = (Math.random() * 0.5 + 0.5).toString();
      document.querySelector('.floating-hearts')?.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 15000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return <div className="floating-hearts" />;
}

export default function Dashboard() {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
      toast.success('Logout realizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao fazer logout');
    }
  };

  const suggestedMatches = [
    {
      id: 1,
      name: "Laura Santos",
      age: 27,
      location: "São Paulo, SP",
      interests: ["Fotografia", "Viagens", "Música"],
      photo: "https://i.imgur.com/EUlqJ64.png"
    },
    {
      id: 2,
      name: "Isabela Costa",
      age: 25,
      location: "Rio de Janeiro, RJ",
      interests: ["Arte", "Yoga", "Culinária"],
      photo: "https://i.imgur.com/ZVCimvw.jpeg"
    },
    {
      id: 3,
      name: "Carolina Lima",
      age: 29,
      location: "Belo Horizonte, MG",
      interests: ["Literatura", "Cinema", "Dança"],
      photo: "https://i.imgur.com/Qtyizzr.jpeg"
    },
    {
      id: 4,
      name: "Amanda Silva",
      age: 26,
      location: "Curitiba, PR",
      interests: ["Esportes", "Natureza", "Fotografia"],
      photo: "https://i.imgur.com/pLioSZJ.jpeg"
    },
    {
      id: 5,
      name: "Beatriz Oliveira",
      age: 28,
      location: "Porto Alegre, RS",
      interests: ["Música", "Teatro", "Gastronomia"],
      photo: "https://i.imgur.com/HKsotWg.jpeg"
    },
    {
      id: 6,
      name: "Mariana Alves",
      age: 24,
      location: "Salvador, BA",
      interests: ["Praia", "Dança", "Viagens"],
      photo: "https://i.imgur.com/l1qQ5ZZ.jpeg"
    },
    {
      id: 7,
      name: "Juliana Martins",
      age: 30,
      location: "Recife, PE",
      interests: ["Livros", "Música", "Artes"],
      photo: "https://i.imgur.com/7m2wlOw.jpeg"
    },
    {
      id: 8,
      name: "Fernanda Rocha",
      age: 27,
      location: "Brasília, DF",
      interests: ["Política", "Fotografia", "Esportes"],
      photo: "https://i.imgur.com/nQkrkUx.jpeg"
    },
    {
      id: 9,
      name: "Gabriela Pereira",
      age: 25,
      location: "Florianópolis, SC",
      interests: ["Surf", "Yoga", "Sustentabilidade"],
      photo: "https://i.imgur.com/GLQkfIQ.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 relative overflow-hidden">
      <FloatingHearts />
      
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">Future Match</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <button className="text-white hover:text-pink-200 transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-pink-200 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="flex items-center gap-2 text-white hover:text-pink-200 transition-colors"
            >
              <img
                src={user?.photoURL || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </button>
            <button
              onClick={handleSignOut}
              className="text-white hover:text-pink-200 transition-colors"
            >
              <LogOut className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {suggestedMatches.map((match) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="profile-card bg-white/10 backdrop-blur-md rounded-xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={match.photo}
                  alt={match.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {match.name}, {match.age}
                  </h3>
                  <p className="text-white/90 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {match.location}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {match.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => toast.success(`Você curtiu ${match.name}!`)}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Curtir
                  </button>
                  <button 
                    onClick={() => navigate(`/chat/${match.id}`)}
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    Mensagem
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}