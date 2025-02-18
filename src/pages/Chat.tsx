import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Chat() {
  const { id } = useParams();

  return (
    <div className="min-h-screen p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-8">Chat</h1>
        {/* Chat content will be implemented in the next step */}
      </motion.div>
    </div>
  );
}