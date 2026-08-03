import { Building2, Info, Navigation, FileText, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutUs() {
  const { t } = useLanguage();
  const f = t.about.fields;

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-inner">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">{t.about.label}</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">{t.about.heading}</h3>
            <div className="w-16 h-1 bg-accent mb-6" />
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>

          {/* Info Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-[4px]">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
                <Building2 className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold text-primary font-serif">{t.about.cardTitle}</h4>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <FileText className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">{f.cui}</span>
                    <span className="block text-primary font-semibold">36267751</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Info className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">{f.reg}</span>
                    <span className="block text-primary font-semibold">J20/1600/03693/15</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Navigation className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">{f.address}</span>
                    <span className="block text-primary font-semibold">Șimleu Silvaniei, jud. Sălaj, România</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">{f.phone}</span>
                    <span className="block text-primary font-semibold">[TELEFON]</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="block text-sm text-gray-500 font-medium">{f.email}</span>
                    <span className="block text-primary font-semibold">[EMAIL]</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
