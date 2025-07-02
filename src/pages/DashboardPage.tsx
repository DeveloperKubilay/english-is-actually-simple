import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">📚 Dashboard</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Çıkış Yap
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">🎯 Günlük Hedef</h3>
            <div className="text-3xl font-bold text-blue-600">15/20</div>
            <p className="text-gray-600">kelime öğrenildi</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">🔥 Streak</h3>
            <div className="text-3xl font-bold text-orange-600">7</div>
            <p className="text-gray-600">gün üst üste</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">📈 Seviye</h3>
            <div className="text-3xl font-bold text-green-600">B1</div>
            <p className="text-gray-600">Intermediate</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">📖 Bugünkü Dersler</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span>Kelime Öğrenme</span>
                <span className="text-blue-600 font-semibold">Başla</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span>Grammar Quiz</span>
                <span className="text-green-600 font-semibold">Devam Et</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span>Listening Practice</span>
                <span className="text-yellow-600 font-semibold">Yeni</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">🏆 Son Başarılar</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">🥇</div>
                <span>100 kelime tamamlandı!</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">📚</div>
                <span>Grammar seviyesi yükseldi</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">⚡</div>
                <span>7 günlük streak!</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
