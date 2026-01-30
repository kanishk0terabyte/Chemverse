import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, FlaskConical, Shield } from 'lucide-react'; // Fixed: removed 'atom'

const Home = () => {
  return (
    <div className="min-h-screen pt-16 flex flex-col justify-center relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Main Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-neon-blue/30 rounded-full bg-neon-blue/10 backdrop-blur-md">
            <span className="flex items-center gap-2 text-neon-blue text-sm font-semibold tracking-wide uppercase">
              <Sparkles size={16} />
              AI-Powered Chemistry Lab
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Experience Chemistry <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow">
              Beyond the Textbook
            </span>
          </h1>

          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Perform 3D experiments, chat with an AI Tutor, and visualize complex reactions in real-time without safety risks.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/lab" className="group relative px-8 py-4 bg-neon-blue text-dark-900 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,242,234,0.4)]">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
            <span className="relative flex items-center gap-2">
              Enter Virtual Lab <FlaskConical size={20} />
            </span>
          </Link>

          <Link to="/ai" className="group px-8 py-4 bg-dark-800 border border-white/10 text-white font-bold rounded-xl hover:bg-dark-700 transition-all hover:border-neon-purple/50">
            <span className="flex items-center gap-2">
              Ask AI Tutor <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 pb-20">
          {[
            { title: "Safety First", desc: "Perform dangerous reactions safely in a virtual environment.", color: "bg-neon-green", icon: <Shield className="text-neon-green mb-4" size={32} /> },
            { title: "AI Assistant", desc: "Get instant answers to equations and concepts anytime.", color: "bg-neon-blue", icon: <Sparkles className="text-neon-blue mb-4" size={32} /> },
            { title: "3D Visuals", desc: "Rotate and zoom into molecules to understand structures.", color: "bg-neon-purple", icon: <FlaskConical className="text-neon-purple mb-4" size={32} /> }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className="glass p-6 rounded-2xl hover:border-white/20 transition-colors text-left"
            >
              {item.icon}
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;