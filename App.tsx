import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink, Play, LayoutGrid } from 'lucide-react';
import { Logo } from './components/Logo';
import { Slide } from './components/Slide';
import { canvasData } from './data';
import { CanvasItem } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Order logic: 
  // 0: Intro
  // 1-9: Canvas Items
  // 10: Outro/App Link
  
  const orderedCanvasData = [
    canvasData.find(i => i.id === 'value_prop'),
    canvasData.find(i => i.id === 'segments'),
    canvasData.find(i => i.id === 'channels'),
    canvasData.find(i => i.id === 'relationships'),
    canvasData.find(i => i.id === 'revenue'),
    canvasData.find(i => i.id === 'resources'),
    canvasData.find(i => i.id === 'activities'),
    canvasData.find(i => i.id === 'partners'),
    canvasData.find(i => i.id === 'costs'),
  ].filter(Boolean) as CanvasItem[];

  const totalSlides = orderedCanvasData.length + 2;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection('right');
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection('left');
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    // Use h-[100dvh] for better mobile browser support
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 relative overflow-hidden font-sans text-slate-900">
      
      {/* Background Decor Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Presentation Container */}
      <div className="w-full max-w-[1400px] h-full flex flex-col p-4 md:p-6 lg:p-8 relative">
        
        {/* Header - Only visible on internal slides */}
        <div className={`flex justify-between items-center mb-4 md:mb-6 px-2 shrink-0 transition-opacity duration-500 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Logo iconSize="w-8 h-8 md:w-10 md:h-10" textSize="text-xl md:text-2xl" />
          {/* Progress Indicators - Hidden on very small screens if too many dots */}
          <div className="hidden sm:flex gap-1.5 md:gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-6 md:w-8 bg-blue-600' : 'w-1.5 md:w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          {/* Mobile simple progress */}
          <div className="sm:hidden text-xs font-bold text-slate-400">
             {currentSlide + 1} / {totalSlides}
          </div>
        </div>

        {/* Slide Content Area */}
        <div className="flex-grow relative glass rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/50 overflow-hidden">
          
          {/* SLIDE 0: INTRO */}
          {currentSlide === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8 animate-pop overflow-y-auto">
              
              <div className="animate-float mb-8 md:mb-12 mt-auto md:mt-0">
                {/* LARGE LOGO */}
                <Logo 
                  layout="vertical" 
                  iconSize="w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72" 
                  textSize="text-5xl md:text-7xl lg:text-8xl" 
                />
              </div>
              
              <div className="space-y-4 mb-8">
                 <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm md:text-base font-bold uppercase tracking-wider shadow-sm border border-blue-200">
                    Presentación de Prototipo (MVP)
                 </span>
                 <h2 className="text-xl md:text-3xl font-medium text-slate-500">
                   Plataforma de Gestión de Ajuste Razonable
                 </h2>
              </div>

              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 md:mb-16 px-4 leading-relaxed">
                Estrategia integral, presupuesto y modelo de validación 2025.
              </p>
              
              <button 
                onClick={nextSlide}
                className="mb-auto md:mb-0 group flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-slate-900 text-white rounded-full font-bold text-lg md:text-xl hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95"
              >
                Iniciar Presentación
                <Play className="w-6 h-6 fill-current" />
              </button>
            </div>
          )}

          {/* SLIDES 1-9: CANVAS ITEMS */}
          {currentSlide > 0 && currentSlide <= orderedCanvasData.length && (
            <Slide 
              data={orderedCanvasData[currentSlide - 1]} 
              direction={direction}
              index={currentSlide}
            />
          )}

          {/* SLIDE 10: OUTRO / APP LINK */}
          {currentSlide === totalSlides - 1 && (
            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center p-6 md:p-12 lg:p-20 gap-8 lg:gap-12 animate-slide-right overflow-y-auto">
               <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6 mt-auto lg:mt-0">
                  <div className="inline-block p-3 bg-green-100 rounded-2xl mb-2">
                    <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    Validar Prototipo
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                    Accede a la aplicación en tiempo real. Los datos registrados se sincronizan con la base de datos de pruebas.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                    <a 
                      href="https://piar-360.vercel.app/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-xl font-bold text-base md:text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-1"
                    >
                      Abrir Aplicación
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <button 
                      onClick={() => goToSlide(0)}
                      className="flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-base md:text-lg hover:bg-slate-50 transition-all"
                    >
                      <LayoutGrid className="w-5 h-5" />
                      Inicio
                    </button>
                  </div>
               </div>

               <div className="flex-1 w-full max-w-sm md:max-w-md lg:max-w-full bg-white rounded-2xl shadow-2xl p-2 border-4 md:border-8 border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-500 mb-auto lg:mb-0">
                  <div className="bg-slate-100 rounded-lg aspect-video flex items-center justify-center overflow-hidden relative group cursor-pointer" onClick={() => window.open('https://piar-360.vercel.app/', '_blank')}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white">
                      <Logo 
                        layout="vertical"
                        iconSize="w-20 h-20 md:w-32 md:h-32" 
                        textSize="text-2xl md:text-4xl"
                        className="mb-3 text-white"
                      />
                      <span className="font-bold text-sm md:text-base bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm mt-4">
                        Click para ver Demo
                      </span>
                    </div>
                  </div>
               </div>
            </div>
          )}

        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-4 md:mt-6 shrink-0">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all disabled:opacity-0 hover:bg-white/50 text-slate-700 text-sm md:text-base active:bg-white/80"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            Anterior
          </button>

          <span className="hidden md:block text-slate-400 font-medium tracking-widest text-xs md:text-sm uppercase">
            {currentSlide === 0 ? 'Bienvenida' : currentSlide === totalSlides - 1 ? 'Cierre' : orderedCanvasData[currentSlide - 1]?.title}
          </span>

          <button 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all disabled:opacity-0 hover:bg-white/50 text-slate-700 text-sm md:text-base active:bg-white/80"
          >
            Siguiente
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;