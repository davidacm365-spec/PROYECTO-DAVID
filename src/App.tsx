import { useState } from 'react';
import { 
  LayoutDashboard, 
  History, 
  Layers, 
  FileText, 
  Settings, 
  HelpCircle, 
  Search, 
  Bell, 
  ChevronDown, 
  Upload, 
  Sliders, 
  Sparkles,
  Loader2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [visualTheme, setVisualTheme] = useState('Corporate');
  const [interactivity, setInteractivity] = useState(2);
  const [autoGenImages, setAutoGenImages] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <div className="flex h-screen bg-editorial-bg text-editorial-ink font-sans overflow-hidden">
      {/* Sidebar - Narrative Rail */}
      <aside className="w-[80px] border-r border-editorial-ink/10 flex flex-col items-center py-10 justify-between bg-white/50 backdrop-blur-sm z-50">
        <div className="font-serif font-black text-2xl tracking-tighter hover:scale-110 transition-transform cursor-pointer">
          Æ
        </div>
        
        <nav className="writing-mode-vertical-rl rotate-180 flex items-center gap-10 text-[10px] uppercase tracking-[4px] text-slate-400 font-medium">
          <button className="hover:text-editorial-ink transition-colors">Workspace</button>
          <button className="hover:text-editorial-ink transition-colors">Collection</button>
          <button className="hover:text-editorial-ink transition-colors">About</button>
        </nav>

        <div className="text-[10px] font-bold text-slate-300">
          ©26
        </div>
      </aside>

      {/* Main Narrative - Content Pane */}
      <main className="flex-[1.2] p-16 lg:p-24 flex flex-col justify-center relative overflow-y-auto">
        <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center bg-transparent">
          <div className="text-[10px] uppercase tracking-[2px] font-bold text-slate-400">
            DocuPresenter — v1.0
          </div>
          <div className="flex items-center gap-6">
            <button className="p-1 hover:text-editorial-accent transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="p-1 hover:text-editorial-accent transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <div className="w-8 h-8 rounded-full bg-editorial-pane flex items-center justify-center overflow-hidden border border-editorial-ink/10">
              <img src="https://picsum.photos/seed/editorial/64/64" alt="User" referrerPolicy="no-referrer" />
            </div>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-[11px] uppercase tracking-[3px] font-bold text-editorial-accent mb-6">
            Module No. 01 — Presentation
          </div>
          
          <h1 className="font-serif text-[clamp(4rem,8vw,6rem)] leading-[0.9] tracking-[-0.03em] mb-8">
            Document<br />
            <span className="italic opacity-50">Reflections</span>
          </h1>

          <p className="text-lg leading-relaxed text-slate-600 max-w-sm mb-12 font-light">
            An intelligent dive into the visual structure of your documents, 
            transforming static text into dynamic experiences.
          </p>

          <div className="flex items-center gap-8">
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-10 py-5 bg-editorial-ink text-white uppercase text-[11px] tracking-[3px] font-bold hover:bg-neutral-800 transition-all flex items-center gap-3 group relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div key="spin" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                    <Loader2 className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div key="idle" className="flex items-center gap-3">
                    <span>Generate Module</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
            <button className="text-[11px] uppercase tracking-[2px] font-bold text-slate-400 hover:text-editorial-ink transition-colors border-b border-transparent hover:border-editorial-ink pb-1">
              Read Docs
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-16 flex items-center gap-4 text-[10px] uppercase tracking-[3px] text-slate-400">
          <div className="w-12 h-px bg-slate-300"></div>
          <span>Discover Tools</span>
        </div>
      </main>

      {/* Visual Canvas - Settings & Upload Pane */}
      <section className="flex-1 bg-editorial-pane relative flex flex-col p-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-multiply flex items-center justify-center pointer-events-none">
          <div className="font-serif italic text-[120px] select-none">ASSETS</div>
        </div>

        <div className="flex-1 flex flex-col justify-center gap-8 z-10">
          {/* Upload Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/40 backdrop-blur-md p-10 border border-white/50 flex flex-col items-center text-center cursor-pointer group hover:bg-white/60 transition-all shadow-sm"
          >
            <div className="w-12 h-12 border border-editorial-ink flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
              <Upload className="w-5 h-5" />
            </div>
            <p className="font-serif italic text-xl mb-2">Ingest Material</p>
            <p className="text-[10px] uppercase tracking-widest text-slate-500">Drop DOCX or click to browse</p>
          </motion.div>

          {/* Settings Float */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white p-10 shadow-[40px_40px_100px_rgba(0,0,0,0.08)] flex flex-col gap-8 border-l border-t border-slate-50 relative"
          >
            <div className="flex items-center gap-3">
              <Sliders className="w-4 h-4 text-editorial-accent" />
              <h2 className="font-serif text-2xl uppercase tracking-tighter">Parameters</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Visual Theme</label>
                <div className="relative border-b border-editorial-ink/10 pb-1">
                  <select 
                    value={visualTheme}
                    onChange={(e) => setVisualTheme(e.target.value)}
                    className="w-full bg-transparent outline-none appearance-none font-serif text-lg cursor-pointer py-1"
                  >
                    <option>Corporate</option>
                    <option>Creative</option>
                    <option>Minimalist</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Interactivity</label>
                  <span className="font-serif italic text-sm">{interactivity === 1 ? 'Low' : interactivity === 2 ? 'Medium' : 'High'}</span>
                </div>
                <input 
                  type="range" min="1" max="3" value={interactivity}
                  onChange={(e) => setInteractivity(parseInt(e.target.value))}
                  className="w-full h-px bg-slate-200 appearance-none cursor-pointer accent-editorial-ink"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="space-y-1">
                  <p className="font-bold text-xs">AI Enrichment</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">Auto-generate Imagery</p>
                </div>
                <button 
                  onClick={() => setAutoGenImages(!autoGenImages)}
                  className={`w-10 h-5 rounded-full transition-colors relative ${autoGenImages ? 'bg-editorial-ink' : 'bg-slate-200'}`}
                >
                  <motion.div 
                    animate={{ x: autoGenImages ? 22 : 2 }}
                    className="w-3.5 h-3.5 bg-white rounded-full absolute top-0.5" 
                  />
                </button>
              </div>
            </div>

            <div className="mt-4 pt-6 border-t border-slate-50 text-[9px] uppercase tracking-[2px] text-slate-400 flex justify-between items-center">
              <span>Status: Standby</span>
              <Sparkles className="w-3 h-3 text-amber-500" />
            </div>
          </motion.div>
        </div>

        <div className="mt-auto flex justify-between items-end p-2 text-[10px] uppercase tracking-[3px] text-slate-400 font-bold mix-blend-difference">
          <span>SEC: 04</span>
          <span>LOCATION — STHLM</span>
        </div>
      </section>
    </div>
  );
}
