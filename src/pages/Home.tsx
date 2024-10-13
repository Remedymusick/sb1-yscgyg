import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mic, Music, Bot } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <motion.h1 
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Hmmmoniqs AI
      </motion.h1>
      <motion.p 
        className="text-xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Transform your ideas into music with the power of AI
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          icon={<Mic size={48} />}
          title="Record"
          description="Use your voice or any sound to start creating"
        />
        <FeatureCard 
          icon={<Music size={48} />}
          title="Transform"
          description="AI turns your sounds into professional instruments"
        />
        <FeatureCard 
          icon={<Bot size={48} />}
          title="Assist"
          description="Get creative and technical guidance from AI"
        />
      </div>
      <Link to="/studio" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors">
        Start Creating
      </Link>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-indigo-800 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default Home;