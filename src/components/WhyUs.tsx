import { CheckCircle2, Wrench, Route, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [
  <CheckCircle2 className="w-10 h-10 text-accent mb-4" />,
  <Wrench className="w-10 h-10 text-accent mb-4" />,
  <Route className="w-10 h-10 text-accent mb-4" />,
  <Clock className="w-10 h-10 text-accent mb-4" />,
];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary text-white section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="container-inner relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">{t.whyUs.label}</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">{t.whyUs.heading}</h3>
            <div className="w-16 h-1 bg-accent mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">{t.whyUs.desc}</p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {t.whyUs.features.map((feature, idx) => (
              <div key={idx}>
                {icons[idx]}
                <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
