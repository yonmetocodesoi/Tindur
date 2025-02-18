import React from 'react';
import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <div className="min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Seu Perfil</h1>
        {/* Profile content will be implemented in the next step */}
      </motion.div>
    </div>
  );
}