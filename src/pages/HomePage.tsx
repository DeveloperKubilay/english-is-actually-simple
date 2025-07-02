import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <nav className="p-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">🚀 EnglishApp</div>
        <div className="space-x-4">
          <Link to="/login" className="text-white hover:text-gray-300 transition-colors">
            Giriş Yap
          </Link>
          <Link to="/login" className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Kayıt Ol
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          İngilizce 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            {" "}Öğren
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          AI destekli İngilizce öğrenme platformu. 
          React, Tailwind ve Firebase ile yapıldı 💯
        </p>

        <div className="space-x-4 mb-16">
          <Link to="/dashboard" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg inline-block">
            Öğrenmeye Başla 📚
          </Link>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all">
            Demo İzle
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">AI Destekli</h3>
            <p className="text-gray-300">Kişiselleştirilmiş öğrenme</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Hedef Odaklı</h3>
            <p className="text-gray-300">Seviyene göre içerik</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Gamification</h3>
            <p className="text-gray-300">Eğlenceli öğrenme deneyimi</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
