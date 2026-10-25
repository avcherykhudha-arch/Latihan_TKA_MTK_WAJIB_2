import React, { useState } from 'react';
import { ZoomIn, X, Maximize2 } from 'lucide-react';

interface MathDiagramProps {
  type?: string;
  caption?: string;
  showExplanationOverlay?: boolean;
}

export const MathDiagram: React.FC<MathDiagramProps> = ({
  type,
  caption,
  showExplanationOverlay = false,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!type) return null;

  const renderSVGContent = (isModal = false) => {
    const width = isModal ? 700 : 450;
    const height = isModal ? 440 : 280;

    switch (type) {
      case 'bridge_triangle':
        return (
          <svg viewBox="0 0 500 320" className="w-full h-auto max-h-80 select-none">
            {/* Background grid */}
            <defs>
              <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="500" height="320" fill="url(#grid1)" rx="8" />

            {/* Base line */}
            <line x1="50" y1="260" x2="410" y2="260" stroke="#334155" strokeWidth="3" />
            {/* Height BC */}
            <line x1="410" y1="260" x2="410" y2="50" stroke="#334155" strokeWidth="3" />
            {/* Hypotenuse AC */}
            <line x1="50" y1="260" x2="410" y2="50" stroke="#c62828" strokeWidth="3.5" />

            {/* Right angle B */}
            <path d="M 390 260 L 390 240 L 410 240" fill="none" stroke="#64748b" strokeWidth="2" />

            {/* Support pole DE: perpendicular to AB */}
            {/* A at (50, 260), C at (410, 50). Slope = (50 - 260)/(410 - 50) = -210/360 = -7/12 */}
            {/* Ratio 1/3 from A: AD = 10, AC = 30. x_D = 50 + 120 = 170. y_D = 260 - 70 = 190 */}
            {showExplanationOverlay && (
              <polygon
                points="170,190 410,50 410,260 170,260"
                fill="#fee2e2"
                opacity="0.6"
              />
            )}
            <line x1="170" y1="260" x2="170" y2="190" stroke="#0284c7" strokeWidth="3" strokeDasharray="4 2" />
            {/* Right angle E */}
            <path d="M 170 240 L 190 240 L 190 260" fill="none" stroke="#64748b" strokeWidth="1.5" />

            {/* Points & Labels */}
            <circle cx="50" cy="260" r="5" fill="#1e293b" />
            <text x="35" y="280" className="text-sm font-bold fill-slate-800">A</text>

            <circle cx="410" cy="260" r="5" fill="#1e293b" />
            <text x="420" y="280" className="text-sm font-bold fill-slate-800">B</text>

            <circle cx="410" cy="50" r="5" fill="#1e293b" />
            <text x="420" y="45" className="text-sm font-bold fill-slate-800">C</text>

            <circle cx="170" cy="190" r="5" fill="#0284c7" />
            <text x="160" y="175" className="text-sm font-bold fill-sky-800">D</text>

            <circle cx="170" cy="260" r="5" fill="#0284c7" />
            <text x="165" y="285" className="text-sm font-bold fill-sky-800">E</text>

            {/* Dimension indicators */}
            <text x="230" y="285" className="text-xs font-semibold fill-slate-600">AB = 24 m</text>
            <text x="420" y="155" className="text-xs font-semibold fill-slate-600">BC = 18 m</text>
            <text x="90" y="210" className="text-xs font-semibold fill-red-700">AD = 10 m</text>

            {showExplanationOverlay && (
              <text x="250" y="180" className="text-xs font-bold fill-red-800">
                Trapesium BCDE = 192 m²
              </text>
            )}
          </svg>
        );

      case 'lighthouse_elevation':
        return (
          <svg viewBox="0 0 500 300" className="w-full h-auto max-h-80 select-none">
            <defs>
              <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            {/* Sea level */}
            <rect x="0" y="240" width="500" height="60" fill="url(#seaGrad)" />
            <line x1="0" y1="240" x2="500" y2="240" stroke="#0284c7" strokeWidth="2" />

            {/* Cliff & Lighthouse Tower */}
            <rect x="380" y="180" width="100" height="60" fill="#78716c" rx="2" />
            <rect x="410" y="40" width="30" height="140" fill="#dc2626" rx="2" />
            <polygon points="410,40 425,15 440,40" fill="#fbbf24" />
            <circle cx="425" cy="30" r="8" fill="#fef08a" opacity="0.8" />

            {/* Eye level line (1.5m above sea) */}
            <line x1="40" y1="225" x2="425" y2="225" stroke="#94a3b8" strokeDasharray="3 3" />

            {/* Sight lines */}
            {/* Point P (x=60, y=225) */}
            <line x1="60" y1="225" x2="425" y2="20" stroke="#ea580c" strokeWidth="2.5" />
            {/* Point Q (x=240, y=225) */}
            <line x1="240" y1="225" x2="425" y2="20" stroke="#2563eb" strokeWidth="2.5" />

            {/* Angles arcs */}
            <path d="M 110 225 A 50 50 0 0 0 102 200" fill="none" stroke="#ea580c" strokeWidth="2" />
            <text x="115" y="215" className="text-xs font-bold fill-orange-700">30°</text>

            <path d="M 280 225 A 40 40 0 0 0 260 180" fill="none" stroke="#2563eb" strokeWidth="2" />
            <text x="285" y="205" className="text-xs font-bold fill-blue-700">60°</text>

            {/* Distance marker PQ = 60m */}
            <line x1="60" y1="260" x2="240" y2="260" stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="130" y="275" className="text-xs font-bold fill-slate-800">PQ = 60 meter</text>

            {/* Labels */}
            <circle cx="60" cy="225" r="4" fill="#ea580c" />
            <text x="50" y="215" className="text-sm font-bold fill-orange-800">P</text>

            <circle cx="240" cy="225" r="4" fill="#2563eb" />
            <text x="235" y="215" className="text-sm font-bold fill-blue-800">Q</text>

            <circle cx="425" cy="20" r="4" fill="#dc2626" />
            <text x="435" y="25" className="text-sm font-bold fill-red-800">T</text>
            <text x="435" y="110" className="text-xs font-semibold fill-slate-700">Tinggi h</text>
          </svg>
        );

      case 'linear_programming_region':
        return (
          <svg viewBox="0 0 450 320" className="w-full h-auto max-h-80 select-none">
            {/* Axes */}
            <line x1="40" y1="280" x2="420" y2="280" stroke="#334155" strokeWidth="2" />
            <line x1="40" y1="280" x2="40" y2="20" stroke="#334155" strokeWidth="2" />
            <text x="410" y="300" className="text-xs font-bold fill-slate-700">X (Mentik)</text>
            <text x="15" y="30" className="text-xs font-bold fill-slate-700">Y</text>

            {/* Feasible Region Polygon:
                Scale: 1 unit = 22px.
                (0,0) -> (40, 280)
                (10, 0) -> (40 + 220, 280) = (260, 280)
                (7, 4.5) -> (40 + 154, 280 - 99) = (194, 181)
                (0, 8) -> (40, 280 - 176) = (40, 104)
            */}
            <polygon
              points="40,280 260,280 194,181 40,104"
              fill="#dcfce7"
              stroke="#16a34a"
              strokeWidth="2.5"
            />

            {/* Lines */}
            {/* Irigasi: 3x + 2y = 30 -> (10, 0) to (0, 15) */}
            <line x1="40" y1="-50" x2="260" y2="280" stroke="#dc2626" strokeWidth="1.8" strokeDasharray="5 3" />
            {/* Tenaga: x + 2y = 16 -> (16, 0) to (0, 8) */}
            <line x1="40" y1="104" x2="392" y2="280" stroke="#2563eb" strokeWidth="1.8" strokeDasharray="5 3" />
            {/* Lahan: x + y = 12 -> (12, 0) to (0, 12) */}
            <line x1="40" y1="16" x2="304" y2="280" stroke="#9333ea" strokeWidth="1.8" strokeDasharray="3 3" />

            {/* Optimum point */}
            <circle cx="194" cy="181" r="6" fill="#dc2626" />
            <text x="205" y="175" className="text-xs font-bold fill-red-700">Optimum (7; 4,5)</text>

            {/* Corner points */}
            <circle cx="260" cy="280" r="4" fill="#16a34a" />
            <text x="250" y="300" className="text-xs font-semibold fill-slate-700">(10, 0)</text>

            <circle cx="40" cy="104" r="4" fill="#16a34a" />
            <text x="5" y="105" className="text-xs font-semibold fill-slate-700">(0, 8)</text>

            <text x="90" y="210" className="text-xs font-bold fill-emerald-800">Daerah Layak</text>
          </svg>
        );

      case 'garden_concentric_petals':
        return (
          <svg viewBox="0 0 350 350" className="w-full h-auto max-h-80 select-none">
            {/* Square ABCD: 40 to 300 (size 260px = 28m) */}
            <rect x="40" y="40" width="260" height="260" fill="#f8fafc" stroke="#334155" strokeWidth="3" rx="4" />

            {/* Inscribed Circle (radius 130px) */}
            <circle cx="170" cy="170" r="130" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" opacity="0.7" />

            {/* 4 Corner Quarter Circles r = 130 from corners */}
            {/* Top-left (40, 40) */}
            <path d="M 40 170 A 130 130 0 0 0 170 40 L 40 40 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" opacity="0.6" />
            {/* Top-right (300, 40) */}
            <path d="M 170 40 A 130 130 0 0 0 300 170 L 300 40 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" opacity="0.6" />
            {/* Bottom-right (300, 300) */}
            <path d="M 300 170 A 130 130 0 0 0 170 300 L 300 300 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" opacity="0.6" />
            {/* Bottom-left (40, 300) */}
            <path d="M 170 300 A 130 130 0 0 0 40 170 L 40 300 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" opacity="0.6" />

            {/* Labels */}
            <text x="25" y="40" className="text-sm font-bold fill-slate-800">A</text>
            <text x="310" y="40" className="text-sm font-bold fill-slate-800">B</text>
            <text x="310" y="315" className="text-sm font-bold fill-slate-800">C</text>
            <text x="25" y="315" className="text-sm font-bold fill-slate-800">D</text>

            <text x="145" y="25" className="text-xs font-semibold fill-slate-700">s = 28 m</text>
            <text x="140" y="175" className="text-xs font-bold fill-red-800">r = 14 m</text>
          </svg>
        );

      case 'wheelchair_ramp_trig':
        return (
          <svg viewBox="0 0 450 250" className="w-full h-auto max-h-72 select-none">
            {/* Ground */}
            <line x1="40" y1="200" x2="410" y2="200" stroke="#334155" strokeWidth="3" />
            {/* Door step (vertical) */}
            <line x1="380" y1="200" x2="380" y2="70" stroke="#334155" strokeWidth="3" />
            {/* Ramp hypotenuse */}
            <line x1="50" y1="200" x2="380" y2="70" stroke="#c62828" strokeWidth="3.5" />

            {/* Angle alpha */}
            <path d="M 110 200 A 60 60 0 0 0 102 180" fill="none" stroke="#2563eb" strokeWidth="2" />
            <text x="115" y="190" className="text-sm font-bold fill-blue-700">α</text>

            {/* Right angle at base of wall */}
            <path d="M 360 200 L 360 180 L 380 180" fill="none" stroke="#64748b" strokeWidth="2" />

            {/* Dimensions */}
            <text x="390" y="140" className="text-xs font-bold fill-slate-700">h = 1,2 m</text>
            <text x="190" y="125" className="text-xs font-bold fill-red-700">L = 3,7 m</text>
            <text x="190" y="220" className="text-xs font-semibold fill-slate-600">Proyeksi x = 3,5 m</text>
          </svg>
        );

      case 'cube_3d_distances':
        return (
          <svg viewBox="0 0 450 320" className="w-full h-auto max-h-80 select-none">
            {/* Front Face: ABFE. A(100, 240), B(280, 240), F(280, 90), E(100, 90) */}
            {/* Back Face: DCGH. D(160, 180), C(340, 180), G(340, 30), H(160, 30) */}

            {/* Hidden edges (dashed) */}
            <line x1="100" y1="240" x2="160" y2="180" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="160" y1="180" x2="340" y2="180" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="160" y1="180" x2="160" y2="30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Visible Edges */}
            <rect x="100" y="90" width="180" height="150" fill="none" stroke="#334155" strokeWidth="2.5" />
            <line x1="100" y1="90" x2="160" y2="30" stroke="#334155" strokeWidth="2.5" />
            <line x1="280" y1="90" x2="340" y2="30" stroke="#334155" strokeWidth="2.5" />
            <line x1="280" y1="240" x2="340" y2="180" stroke="#334155" strokeWidth="2.5" />
            <line x1="160" y1="30" x2="340" y2="30" stroke="#334155" strokeWidth="2.5" />
            <line x1="340" y1="30" x2="340" y2="180" stroke="#334155" strokeWidth="2.5" />

            {/* Point P on CG (midpoint of (340, 180) and (340, 30) = (340, 105)) */}
            <circle cx="340" cy="105" r="5" fill="#dc2626" />
            <text x="350" y="110" className="text-xs font-bold fill-red-700">P (Tengah CG)</text>

            {/* Point Q on base (intersection of AC and BD) */}
            {/* A(100, 240), C(340, 180) -> Midpoint Q = (220, 210) */}
            <circle cx="220" cy="210" r="5" fill="#0284c7" />
            <text x="210" y="230" className="text-xs font-bold fill-sky-800">Q</text>

            {/* Line AP */}
            <line x1="100" y1="240" x2="340" y2="105" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 3" />

            {/* Labels */}
            <text x="85" y="255" className="text-xs font-bold fill-slate-800">A</text>
            <text x="285" y="255" className="text-xs font-bold fill-slate-800">B</text>
            <text x="345" y="195" className="text-xs font-bold fill-slate-800">C</text>
            <text x="145" y="185" className="text-xs font-bold fill-slate-800">D</text>
            <text x="85" y="85" className="text-xs font-bold fill-slate-800">E</text>
            <text x="285" y="85" className="text-xs font-bold fill-slate-800">F</text>
            <text x="345" y="25" className="text-xs font-bold fill-slate-800">G</text>
            <text x="145" y="25" className="text-xs font-bold fill-slate-800">H</text>

            <text x="180" y="270" className="text-xs font-semibold fill-slate-600">Rusuk s = 12 cm</text>
          </svg>
        );

      case 'parabola_trajectory':
        return (
          <svg viewBox="0 0 450 280" className="w-full h-auto max-h-72 select-none">
            {/* Coordinate grid */}
            <line x1="50" y1="240" x2="420" y2="240" stroke="#334155" strokeWidth="2" />
            <line x1="50" y1="240" x2="50" y2="20" stroke="#334155" strokeWidth="2" />
            <text x="400" y="260" className="text-xs font-bold fill-slate-700">Waktu t (detik)</text>
            <text x="15" y="30" className="text-xs font-bold fill-slate-700">h (m)</text>

            {/* Parabola: h(t) = -5t^2 + 30t + 4
                t=0: (50, 240 - 16) = (50, 224)
                t=1: (110, 240 - 116) = (110, 124)
                t=2: (170, 240 - 176) = (170, 64)
                t=3 (vertex): (230, 240 - 196) = (230, 44)
                t=4: (290, 64)
                t=5: (350, 124)
                t=6: (410, 224)
            */}
            <path
              d="M 50 224 Q 140 -20 230 44 T 410 224"
              fill="none"
              stroke="#c62828"
              strokeWidth="3.5"
            />

            {/* Key points */}
            <circle cx="50" cy="224" r="5" fill="#334155" />
            <text x="60" y="220" className="text-xs font-semibold fill-slate-700">(0, 4)</text>

            <circle cx="110" cy="124" r="5" fill="#334155" />
            <text x="120" y="125" className="text-xs font-semibold fill-slate-700">(1, 29)</text>

            <circle cx="170" cy="64" r="5" fill="#334155" />
            <text x="180" y="65" className="text-xs font-semibold fill-slate-700">(2, 44)</text>

            {/* Vertex */}
            <circle cx="230" cy="44" r="6" fill="#16a34a" />
            <line x1="230" y1="44" x2="230" y2="240" stroke="#16a34a" strokeDasharray="3 3" />
            <text x="240" y="40" className="text-xs font-bold fill-emerald-800">Puncak (3 s, 49 m)</text>
          </svg>
        );

      case 'silo_composite_cylinder_cone':
        return (
          <svg viewBox="0 0 350 340" className="w-full h-auto max-h-80 select-none">
            {/* Cylinder Body: r=70px (7m), h=100px (10m) */}
            {/* Center X = 175 */}
            {/* Bottom Ellipse */}
            <ellipse cx="175" cy="280" rx="70" ry="20" fill="#e2e8f0" stroke="#334155" strokeWidth="2.5" />
            {/* Cylinder Walls */}
            <line x1="105" y1="180" x2="105" y2="280" stroke="#334155" strokeWidth="2.5" />
            <line x1="245" y1="180" x2="245" y2="280" stroke="#334155" strokeWidth="2.5" />
            {/* Middle seam ellipse (dashed hidden) */}
            <ellipse cx="175" cy="180" rx="70" ry="20" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Cone Top: apex at (175, 30), height = 150px (24m) */}
            <path d="M 105 180 L 175 30 L 245 180" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5" opacity="0.8" />

            {/* Slant Height Label */}
            <text x="220" y="100" className="text-xs font-bold fill-red-700">s = 25 m</text>
            <text x="255" y="235" className="text-xs font-semibold fill-slate-700">t₁ = 10 m</text>
            <text x="175" y="200" className="text-xs font-semibold fill-slate-700">r = 7 m</text>
          </svg>
        );

      default:
        return (
          <div className="p-4 bg-slate-100 rounded-lg text-center text-slate-600 text-sm">
            Diagram Matematika Presisi: {caption || type}
          </div>
        );
    }
  };

  return (
    <div className="my-4 bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
          Diagram Stimulus Presisi
        </span>
        <button
          onClick={() => setIsZoomed(true)}
          className="text-xs font-semibold text-red-700 hover:text-red-800 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-lg flex items-center gap-1 transition"
          title="Perbesar tampilan gambar diagram"
          aria-label="Perbesar gambar diagram"
        >
          <ZoomIn className="w-3.5 h-3.5" />
          Perbesar
        </button>
      </div>

      <div className="flex justify-center items-center overflow-x-auto py-1">
        {renderSVGContent(false)}
      </div>

      {caption && (
        <p className="text-xs text-center text-slate-500 mt-2 italic font-medium">
          {caption}
        </p>
      )}

      {/* Modal Zoom */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <Maximize2 className="w-5 h-5 text-red-600" />
                Detail Visual Geometri Beresolusi Tinggi
              </h3>
              <button
                onClick={() => setIsZoomed(false)}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition"
                aria-label="Tutup perbesaran gambar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="my-6 flex justify-center items-center max-h-[70vh] overflow-auto">
              {renderSVGContent(true)}
            </div>

            {caption && (
              <p className="text-sm text-center text-slate-700 font-medium bg-slate-50 py-2 rounded-lg">
                {caption}
              </p>
            )}

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsZoomed(false)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm rounded-xl transition"
              >
                Tutup Tampilan Penuh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
