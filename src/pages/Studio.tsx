import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Mic, Save, Download } from 'lucide-react';

const Studio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="max-w-full mx-auto px-4 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-purple-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hmmmoniqs Studio
      </motion.h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8 border border-purple-500">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
              <SkipBack size={20} />
            </button>
            <button 
              className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
              onClick={handlePlayPause}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="flex space-x-4">
            <button 
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isRecording ? 'bg-red-600' : 'bg-green-600'} hover:opacity-90 transition-opacity`}
              onClick={handleRecord}
            >
              <Mic size={20} />
              <span>{isRecording ? 'Stop' : 'Record'}</span>
            </button>
            <button className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
              <Save size={20} />
            </button>
            <button className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
              <Download size={20} />
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 pr-4">
            <TrackList />
          </div>
          <div className="w-3/4">
            <Timeline />
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-purple-500">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">AI Assistant</h2>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">AI assistant interface coming soon...</p>
        </div>
      </div>
    </div>
  );
};

const TrackList: React.FC = () => {
  const tracks = ['Vocals', 'Guitar', 'Bass', 'Drums'];

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4 text-purple-300">Tracks</h3>
      {tracks.map((track, index) => (
        <div key={index} className="flex items-center justify-between mb-2 p-2 bg-gray-700 rounded">
          <span>{track}</span>
          <div className="flex space-x-2">
            <button className="p-1 bg-purple-600 rounded hover:bg-purple-700 transition-colors">M</button>
            <button className="p-1 bg-purple-600 rounded hover:bg-purple-700 transition-colors">S</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex mb-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex-1 text-center text-xs text-gray-400">{i + 1}</div>
        ))}
      </div>
      {[...Array(4)].map((_, trackIndex) => (
        <div key={trackIndex} className="h-16 mb-2 bg-gray-700 rounded relative">
          {[...Array(8)].map((_, measureIndex) => (
            <div 
              key={measureIndex} 
              className="absolute top-0 bottom-0 border-l border-gray-600"
              style={{ left: `${(measureIndex / 8) * 100}%` }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Studio;