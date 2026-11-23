import { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Terminal, Shield, Cpu } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing environment...');

  useEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth non-linear increment (~1.6s total)
        const diff = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + diff, 100);

        if (next < 35) {
          setStatusText('Initializing environment...');
        } else if (next < 70) {
          setStatusText('Loading security modules & projects...');
        } else if (next < 95) {
          setStatusText('Decrypting assets & portfolio data...');
        } else {
          setStatusText('System ready. Welcome!');
        }

        return next;
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        document.body.style.overflow = 'unset';
        if (onComplete) onComplete();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: 'blur(8px)',
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070B14] text-white select-none overflow-hidden"
    >
      {/* Subtle tech background radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/40 via-[#070B14] to-[#070B14] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        {/* Glowing Monogram Badge */}
        <Motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent border border-blue-500/30 flex items-center justify-center backdrop-blur-xl shadow-[0_0_35px_rgba(59,130,246,0.3)]">
            <span className="font-mono text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              &lt;KD /&gt;
            </span>
          </div>

          {/* Pulse ring */}
          <div
            className="absolute -inset-1 rounded-2xl border border-blue-400/20 animate-ping pointer-events-none"
            style={{ animationDuration: '2.5s' }}
          />
        </Motion.div>

        {/* Title / Name */}
        <Motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white text-center"
        >
          Kheireddine Debz
        </Motion.h1>

        {/* Subtitle with Badges */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-slate-400 tracking-wider font-mono text-center"
        >
          <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Software &amp; Network Security</span>
          <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        </Motion.div>

        {/* Progress Bar Container */}
        <div className="w-full mt-8 bg-slate-900/90 rounded-full h-2 p-[2px] border border-slate-800 shadow-inner overflow-hidden">
          <Motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        {/* Status Info & Percentage Counter */}
        <div className="w-full flex items-center justify-between mt-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400 truncate max-w-[80%]">
            <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0 animate-pulse" />
            <span className="truncate">{statusText}</span>
          </div>
          <span className="text-cyan-400 font-bold ml-2 shrink-0">
            {progress}%
          </span>
        </div>
      </div>
    </Motion.div>
  );
}
