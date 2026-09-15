import { useState } from 'react';
import { frogs, FrogData } from './data/frogs';
import FrogCard from './components/FrogCard';
import FrogDetail from './components/FrogDetail';

function App() {
  const [selectedFrog, setSelectedFrog] = useState<FrogData | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-frog-dark via-frog-medium to-frog-dark">
      {/* Header */}
      <header className="relative overflow-hidden py-8 px-4 text-center">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute text-4xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            >
              🐸
            </span>
          ))}
        </div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-frog-glow mb-3 animate-bounce-slow">
          🐸 El Món de les Granotes 🐸
        </h1>
        <p className="relative text-lg md:text-xl text-frog-accent/80 font-medium">
          Descobreix totes les granotes del planeta!
        </p>
        <div className="relative mt-4 flex justify-center gap-2">
          <span className="text-2xl animate-wiggle">🌍</span>
          <span className="text-2xl animate-wiggle" style={{ animationDelay: '0.3s' }}>🌿</span>
          <span className="text-2xl animate-wiggle" style={{ animationDelay: '0.6s' }}>💧</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-8">
        {selectedFrog ? (
          <FrogDetail frog={selectedFrog} onBack={() => setSelectedFrog(null)} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {frogs.map((frog) => (
              <FrogCard
                key={frog.id}
                frog={frog}
                onClick={() => setSelectedFrog(frog)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-frog-light/30">
        <p className="text-frog-accent text-lg font-medium">
          🐸 Web feta per Andreu Casals 🐸
        </p>
        <p className="text-frog-accent/60 text-sm mt-1">
          Per la classe de les Granotes 🐸💚
        </p>
      </footer>
    </div>
  );
}

export default App;
