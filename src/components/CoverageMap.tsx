import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CoverageMap() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-100 border-y border-gray-200 overflow-hidden">
      <div className="container-inner">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">{t.coverage.label}</h2>
          <h3 className="text-3xl font-serif font-bold text-primary">{t.coverage.heading}</h3>
        </div>

        <div className="relative max-w-5xl mx-auto mt-16">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-2 md:grid-cols-7 gap-6 relative z-10">
            {t.coverage.routes.map((route, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className={`rounded-full mb-4 shadow-md ${idx === 0 ? 'w-6 h-6 bg-accent border-4 border-white' : 'w-4 h-4 bg-primary border-2 border-white'}`} />
                <div className="bg-white px-4 py-3 rounded-[4px] shadow-sm border border-gray-100 text-center w-full min-w-[120px]">
                  <div className="flex justify-center mb-2">
                    <MapPin className={`w-5 h-5 ${idx === 0 ? 'text-accent' : 'text-gray-400'}`} />
                  </div>
                  <h4 className="font-bold text-primary mb-1">{route.country}</h4>
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{route.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg">{t.coverage.desc}</p>
        </div>
      </div>
    </section>
  );
}
