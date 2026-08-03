import { Map, Globe, Package, Truck, Snowflake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [
  <Map className="w-8 h-8 text-accent" />,
  <Globe className="w-8 h-8 text-accent" />,
  <Package className="w-8 h-8 text-accent" />,
  <Truck className="w-8 h-8 text-accent" />,
  <Snowflake className="w-8 h-8 text-accent" />,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-inner">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">{t.services.label}</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">{t.services.heading}</h3>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 text-lg">{t.services.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-[4px] group"
            >
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-[4px] mb-6 group-hover:bg-accent/10 transition-colors">
                {icons[idx]}
              </div>
              <h4 className="text-xl font-bold text-primary mb-3 font-serif">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
