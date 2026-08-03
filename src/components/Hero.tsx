import { ArrowRight, Phone } from 'lucide-react';
import heroTruck from '../assets/images/hero-truck.jpg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroTruck})` }}
      />
      <div className="absolute inset-0 z-0 bg-primary/70 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />

      <div className="container-inner relative z-10 w-full pt-20">
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/90 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-accent">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6">
            {t.hero.h1a}<br />
            <span className="text-gray-300 italic font-medium">{t.hero.h1b}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed border-l-4 border-accent pl-4">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              {t.hero.ctaQuote}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:[TELEFON]"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              {t.hero.ctaCall}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-accent z-20" />
    </section>
  );
}
