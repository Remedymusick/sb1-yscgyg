import React from 'react';
import { motion } from 'framer-motion';
import { User, Music, Star } from 'lucide-react';

const Profile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    projects: 5,
    subscription: 'Premium Tier 1'
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-purple-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Profile
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-4">
            <User size={64} className="text-purple-400" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center text-purple-300">{user.name}</h2>
          <p className="text-center text-gray-400 mb-4">{user.email}</p>
          <p className="text-center">
            <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
              {user.subscription}
            </span>
          </p>
        </motion.div>
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center text-purple-300">
            <Music size={24} className="mr-2 text-purple-400" />
            Your Projects
          </h3>
          <p className="text-3xl font-bold text-center text-white">{user.projects}</p>
          <p className="text-center text-gray-400">Total Projects</p>
          <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
            View All Projects
          </button>
        </motion.div>
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center text-purple-300">
            <Star size={24} className="mr-2 text-purple-400" />
            Subscription
          </h3>
          <p className="text-lg mb-2 text-white">Current Plan: <span className="font-semibold">{user.subscription}</span></p>
          <ul className="text-sm text-gray-400 mb-4">
            <li>✓ Advanced AI Guidance</li>
            <li>✓ Expanded Sound Library</li>
            <li>✓ Priority Support</li>
          </ul>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Upgrade Plan
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;