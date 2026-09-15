import { useEffect, useRef } from 'react';
import { FrogData } from '../data/frogs';
import FrogMap from './FrogMap';

interface FrogDetailProps {
  frog: FrogData;
  onBack: () => void;
}

function getPerillColor(perill: number): string {
  switch (perill) {
    case 1: return 'text-green-300';
    case 2: return 'text-yellow-300';
    case 3: return 'text-orange-300';
    case 4: return 'text-red-300';
    case 5: return 'text-red-500';
    default: return 'text-green-300';
  }
}

function getPerillBg(perill: number): string {
  switch (perill) {
    case 1: return 'bg-green-500/20 border-green-500/40';
    case 2: return 'bg-yellow-500/20 border-yellow-500/40';
    case 3: return 'bg-orange-500/20 border-orange-500/40';
    case 4: return 'bg-red-500/20 border-red-500/40';
    case 5: return 'bg-red-600/20 border-red-600/40';
    default: return 'bg-green-500/20 border-green-500/40';
  }
}

export default function FrogDetail({ frog, onBack }: FrogDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div ref={containerRef} className="animate-fadeIn max-w-4xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-frog-accent hover:text-frog-glow transition-colors font-medium text-lg group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Tornar a totes les granotes
      </button>

      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden mb-6 border border-frog-light/40 animate-pulse-glow">
        <img
          src={frog.imatge}
          alt={frog.nom}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-frog-dark/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-4xl">{frog.emoji}</span>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-frog-glow mb-2">
          {frog.nom}
        </h2>
        <p className="text-lg text-frog-accent/60 italic">
          {frog.nomCientific}
        </p>
      </div>

      {/* Description */}
      <div className="bg-frog-medium/50 rounded-2xl p-6 mb-6 border border-frog-light/30">
        <h3 className="text-xl font-bold text-frog-glow mb-3 flex items-center gap-2">
          📖 Qui és aquesta granota?
        </h3>
        <p className="text-frog-accent/90 leading-relaxed text-lg">
          {frog.descripcioCompleta}
        </p>
      </div>

      {/* Fun fact */}
      <div className="bg-gradient-to-r from-frog-light/30 to-frog-medium/30 rounded-2xl p-6 mb-6 border border-frog-accent/30 animate-wiggle">
        <h3 className="text-xl font-bold text-frog-glow mb-3 flex items-center gap-2">
          🤩 Sabies que...?
        </h3>
        <p className="text-frog-accent text-lg leading-relaxed">
          {frog.dadaCuriosa}
        </p>
      </div>

      {/* Characteristics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-frog-medium/50 rounded-xl p-5 border border-frog-light/30">
          <h4 className="text-frog-glow font-bold mb-2 flex items-center gap-2">
            📏 Mida
          </h4>
          <p className="text-frog-accent/90 text-lg">{frog.mida}</p>
        </div>
        <div className="bg-frog-medium/50 rounded-xl p-5 border border-frog-light/30">
          <h4 className="text-frog-glow font-bold mb-2 flex items-center gap-2">
            ⏰ Esperança de vida
          </h4>
          <p className="text-frog-accent/90 text-lg">{frog.esperancaVida}</p>
        </div>
        <div className="bg-frog-medium/50 rounded-xl p-5 border border-frog-light/30">
          <h4 className="text-frog-glow font-bold mb-2 flex items-center gap-2">
            🍽️ Alimentació
          </h4>
          <p className="text-frog-accent/90 text-lg">{frog.alimentacio}</p>
        </div>
        <div className="bg-frog-medium/50 rounded-xl p-5 border border-frog-light/30">
          <h4 className="text-frog-glow font-bold mb-2 flex items-center gap-2">
            🏠 Hàbitat
          </h4>
          <p className="text-frog-accent/90 text-lg">{frog.habitat}</p>
        </div>
      </div>

      {/* Danger level */}
      <div className={`rounded-2xl p-6 mb-6 border ${getPerillBg(frog.perill)}`}>
        <h3 className="text-xl font-bold text-frog-glow mb-3 flex items-center gap-2">
          ⚠️ Nivell de perill
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-2xl ${i < frog.perill ? getPerillColor(frog.perill) : 'text-white/20'}`}
              >
                ⚠️
              </span>
            ))}
          </div>
          <span className={`text-lg font-bold ${getPerillColor(frog.perill)}`}>
            {frog.perill}/5
          </span>
        </div>
        <p className="text-frog-accent/90 text-lg">
          {frog.perillDescripcio}
        </p>
      </div>

      {/* Predators */}
      <div className="bg-frog-medium/50 rounded-2xl p-6 mb-6 border border-frog-light/30">
        <h3 className="text-xl font-bold text-frog-glow mb-4 flex items-center gap-2">
          🦊 Qui la vol menjar? (Depredadors)
        </h3>
        <div className="flex flex-wrap gap-3">
          {frog.depredadors.map((depredador, index) => (
            <span
              key={index}
              className="bg-frog-dark/60 border border-frog-light/40 rounded-full px-4 py-2 text-frog-accent font-medium animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {depredador}
            </span>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="bg-frog-medium/50 rounded-2xl p-6 mb-6 border border-frog-light/30">
        <h3 className="text-xl font-bold text-frog-glow mb-4 flex items-center gap-2">
          🗺️ On viu al món?
        </h3>
        <p className="text-frog-accent/80 mb-4">
          Mira on viu la <strong className="text-frog-glow">{frog.nom}</strong> al mapa!
        </p>
        <FrogMap lat={frog.lat} lng={frog.lng} nom={frog.nom} />
      </div>

      {/* Back button bottom */}
      <div className="text-center mt-8 mb-4">
        <button
          onClick={onBack}
          className="bg-frog-light/50 hover:bg-frog-accent/30 border border-frog-accent/40 hover:border-frog-accent text-frog-glow font-bold py-3 px-8 rounded-full transition-all hover:scale-105 text-lg"
        >
          ← Tornar a totes les granotes 🐸
        </button>
      </div>
    </div>
  );
}
