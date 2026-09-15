import { FrogData } from '../data/frogs';

interface FrogCardProps {
  frog: FrogData;
  onClick: () => void;
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

function getPerillLabel(perill: number): string {
  switch (perill) {
    case 1: return 'Molt segura';
    case 2: return 'Poc perillosa';
    case 3: return 'Moderada';
    case 4: return 'Perillosa';
    case 5: return 'MOLT PERILLOSA';
    default: return 'Segura';
  }
}

export default function FrogCard({ frog, onClick }: FrogCardProps) {
  return (
    <div
      onClick={onClick}
      className="frog-card animate-fadeIn cursor-pointer rounded-2xl border border-frog-light/40 bg-gradient-to-br from-frog-medium/80 to-frog-dark/90 p-5 backdrop-blur-sm hover:border-frog-accent/60"
    >
      {/* Emoji */}
      <div className="text-center mb-3">
        <span className="text-5xl block animate-bounce-slow" style={{ animationDelay: `${frog.id * 0.2}s` }}>
          {frog.emoji}
        </span>
      </div>

      {/* Nom */}
      <h3 className="text-lg font-bold text-frog-glow text-center mb-1">
        {frog.nom}
      </h3>
      <p className="text-xs text-frog-accent/60 text-center italic mb-3">
        {frog.nomCientific}
      </p>

      {/* Descripció curta */}
      <p className="text-sm text-frog-accent/80 text-center mb-4 leading-relaxed">
        {frog.descripcioCurta}
      </p>

      {/* Nivell de perill */}
      <div className={`flex items-center justify-center gap-2 rounded-full px-3 py-1.5 border ${getPerillBg(frog.perill)}`}>
        <span className="text-xs font-medium text-white/80">Perill:</span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm ${i < frog.perill ? getPerillColor(frog.perill) : 'text-white/20'}`}
            >
              ⚠️
            </span>
          ))}
        </div>
      </div>

      {/* Label */}
      <p className={`text-xs text-center mt-2 font-medium ${getPerillColor(frog.perill)}`}>
        {getPerillLabel(frog.perill)}
      </p>

      {/* CTA */}
      <div className="mt-4 text-center">
        <span className="text-frog-accent text-sm font-medium hover:text-frog-glow transition-colors">
          Toca per descobrir més! 👆
        </span>
      </div>
    </div>
  );
}
