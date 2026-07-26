'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { Zap, Cpu, Wrench, Building2, Sparkles } from 'lucide-react';

export default function SchematicSVG() {
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsInteractive(true), 2700);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  const animClass = isVisible || reducedMotion ? 'visible' : '';

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 480, height: 'auto', overflow: 'visible' }}
      aria-hidden="true"
      className={isInteractive || reducedMotion ? 'interactive' : ''}
    >
      <style>{`
        /* 1. Snake Line (Soldan gelen yılan) */
        .snake-line {
          stroke: url(#fireworkGradient);
          stroke-width: 4;
          fill: none;
          stroke-linecap: round;
          filter: url(#glow);
          stroke-dasharray: 20 200; 
          stroke-dashoffset: 20;   
          opacity: 0;
        }
        .snake-line.visible {
          animation: snakeMove 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* 2. Center Dot (Merkez Nokta) */
        .center-dot {
          fill: #00BCD4;
          opacity: 0;
          transform: scale(0);
          transform-origin: 240px 240px;
        }
        .center-dot.visible {
          animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: 1.5s; 
        }

        /* 3. Outward Lines (Merkezden çıkan çizgiler) */
        .outward-line {
          stroke: #00BCD4;
          stroke-width: 1.5;
          fill: none;
          stroke-dasharray: 85;
          stroke-dashoffset: 85;
          opacity: 0.6;
        }
        .outward-line.visible {
          animation: drawLine 0.6s ease-out forwards;
          animation-delay: 1.5s; 
        }

        /* 4. Node Backgrounds (Beyaz arka planlar) */
        .node-bg {
          fill: #FFFFFF;
          opacity: 0;
          transform: scale(0);
          transform-origin: 0px 0px;
        }
        
        .node-bg.visible {
          animation: scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: 1.5s; 
        }

        /* 5. Icons and Labels (İkonlar ve Yazılar) */
        .node-icon, .node-label {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .node-icon { stroke: #0097A7; color: #0097A7; }
        .node-label {
          font-family: var(--font-display), system-ui, sans-serif;
          font-size: 13px;
          font-weight: 600;
          fill: #334155;
          letter-spacing: 0.5px;
          text-anchor: middle;
        }
        .node-icon.visible, .node-label.visible {
          opacity: 1;
          transition-delay: 1.9s; 
        }

        /* Hover Effect for Links */
        .node-link {
          cursor: pointer;
          outline: none;
          pointer-events: none;
        }
        .interactive .node-link {
          pointer-events: auto;
        }
        .node-link:hover .node-bg {
          fill: #E0F7FA !important;
          transition: fill 0.25s ease;
        }
        .node-link:hover .node-icon {
          stroke: #00BCD4 !important;
          color: #00BCD4 !important;
          transition: all 0.25s ease;
        }
        .node-link:hover .node-label {
          fill: #0097A7 !important;
          font-weight: bold;
          transition: fill 0.25s ease;
        }

        /* 6. Node Outlines (İkiye ayrılarak çizen yarım daire yolları) */
        .node-outline-half {
          stroke: #00BCD4;
          stroke-width: 2;
          fill: none;
          stroke-dasharray: 114;
          stroke-dashoffset: 114;
        }
        .node-outline-half.visible {
          animation: drawLine 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 2.1s; 
        }

        /* Animations */
        @keyframes snakeMove {
          0% { stroke-dashoffset: 20; opacity: 1; }
          99% { opacity: 1; }
          100% { stroke-dashoffset: -100; opacity: 0; }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes scaleUp {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .snake-line { display: none; }
          .outward-line, .node-outline-half { stroke-dashoffset: 0 !important; animation: none !important; }
          .node-bg, .center-dot { transform: scale(1) !important; opacity: 1 !important; animation: none !important; }
          .node-icon, .node-label { opacity: 1 !important; transition: none !important; }
        }
      `}</style>

      {/* Filters and Gradients */}
      <defs>
        <pattern id="schematicGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ECEFF1" strokeWidth="0.5" />
        </pattern>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur1" />
          <feGaussianBlur stdDeviation="8" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="fireworkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#004D40" />
          <stop offset="60%" stop-color="#00BCD4" />
          <stop offset="100%" stop-color="#FFFFFF" />
        </linearGradient>
      </defs>

      <rect width="480" height="480" fill="url(#schematicGrid)" opacity="0.3" />

      {/* 1. Snake Line */}
      <path 
        d="M -800 350 C -600 350, -500 100, -350 100 C -200 100, -100 350, 50 350 C 150 350, 200 240, 240 240" 
        pathLength="100"
        className={`snake-line ${animClass}`} 
      />

      {/* 2. Outward Lines (Merkezden pentagon köşelerine giden çizgiler) */}
      <line x1="240" y1="240" x2="240" y2="156" className={`outward-line ${animClass}`} />
      <line x1="240" y1="240" x2="320" y2="214" className={`outward-line ${animClass}`} />
      <line x1="240" y1="240" x2="290" y2="308" className={`outward-line ${animClass}`} />
      <line x1="240" y1="240" x2="190" y2="308" className={`outward-line ${animClass}`} />
      <line x1="240" y1="240" x2="160" y2="214" className={`outward-line ${animClass}`} />

      {/* 3. Center Dot */}
      <circle cx="240" cy="240" r="6" className={`center-dot ${animClass}`} />

      {/* 4. Disciplines (Pentagon Şeklinde Dizilim) */}

      {/* Top — TEMİZ ODA (was ELEKTRİK) */}
      <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'temizoda' } }} className="node-link">
        <g transform="translate(240, 120) rotate(-90)">
          <circle cx="0" cy="0" r="36" className={`node-bg ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 1 36 0" className={`node-outline-half ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 0 36 0" className={`node-outline-half ${animClass}`} />
          <g transform="rotate(90)">
            <g transform="translate(-14, -14)" className={`node-icon ${animClass}`}>
              <Sparkles width={28} height={28} strokeWidth={2} />
            </g>
            <text x="0" y="-48" className={`node-label ${animClass}`}>TEMİZ ODA</text>
          </g>
        </g>
      </Link>

      {/* Top-Right — OTOMASYON */}
      <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'otomasyon' } }} className="node-link">
        <g transform="translate(354, 203) rotate(-18)">
          <circle cx="0" cy="0" r="36" className={`node-bg ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 1 36 0" className={`node-outline-half ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 0 36 0" className={`node-outline-half ${animClass}`} />
          <g transform="rotate(18)">
            <g transform="translate(-14, -14)" className={`node-icon ${animClass}`}>
              <Cpu width={28} height={28} strokeWidth={2} />
            </g>
            <text x="0" y="-48" className={`node-label ${animClass}`}>OTOMASYON</text>
          </g>
        </g>
      </Link>

      {/* Bottom-Right — İNŞAAT */}
      <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'insaat' } }} className="node-link">
        <g transform="translate(311, 337) rotate(54)">
          <circle cx="0" cy="0" r="36" className={`node-bg ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 1 36 0" className={`node-outline-half ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 0 36 0" className={`node-outline-half ${animClass}`} />
          <g transform="rotate(-54)">
            <g transform="translate(-14, -14)" className={`node-icon ${animClass}`}>
              <Building2 width={28} height={28} strokeWidth={2} />
            </g>
            <text x="0" y="54" className={`node-label ${animClass}`}>İNŞAAT</text>
          </g>
        </g>
      </Link>

      {/* Bottom-Left — MEKANİK */}
      <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'mekanik' } }} className="node-link">
        <g transform="translate(169, 337) rotate(126)">
          <circle cx="0" cy="0" r="36" className={`node-bg ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 1 36 0" className={`node-outline-half ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 0 36 0" className={`node-outline-half ${animClass}`} />
          <g transform="rotate(-126)">
            <g transform="translate(-14, -14)" className={`node-icon ${animClass}`}>
              <Wrench width={28} height={28} strokeWidth={2} />
            </g>
            <text x="0" y="54" className={`node-label ${animClass}`}>MEKANİK</text>
          </g>
        </g>
      </Link>

      {/* Top-Left — ELEKTRİK (was TEMİZ ODA) */}
      <Link href={{ pathname: '/hizmetler/[slug]', params: { slug: 'elektrik' } }} className="node-link">
        <g transform="translate(126, 203) rotate(-162)">
          <circle cx="0" cy="0" r="36" className={`node-bg ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 1 36 0" className={`node-outline-half ${animClass}`} />
          <path d="M -36 0 A 36 36 0 0 0 36 0" className={`node-outline-half ${animClass}`} />
          <g transform="rotate(162)">
            <g transform="translate(-14, -14)" className={`node-icon ${animClass}`}>
              <Zap width={28} height={28} strokeWidth={2} />
            </g>
            <text x="0" y="-48" className={`node-label ${animClass}`}>ELEKTRİK</text>
          </g>
        </g>
      </Link>

    </svg>
  );
}
