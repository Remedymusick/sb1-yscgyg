import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-900 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Music size={32} className="text-purple-400" />
          <span className="text-2xl font-bold text-white">Hmmmoniqs AI</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-white hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link to="/studio" className="text-white hover:text-purple-400 transition-colors">Studio</Link></li>
            <li><Link to="/profile" className="text-white hover:text-purple-400 transition-colors">Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;