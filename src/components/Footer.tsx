import { Truck, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const currentYear = new Date().getFullYear();

  function scrollToTop(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="bg-[#0a1520] text-gray-400 pt-16 pb-8 border-t-[4px] border-accent">
      <div className="container-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Truck className="w-8 h-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none tracking-wide text-white">CARPOINT STEVEN</span>
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-gray-500">TRANSPORT LOGISTICS</span>
              </div>
            </div>
            <p className="mb-6 max-w-sm leading-relaxed">{f.tagline}</p>
            <div className="text-sm space-y-1">
              <p><strong className="text-gray-300">CUI:</strong> 36267751</p>
              <p><strong className="text-gray-300">Reg. Com:</strong> J20/1600/03693/15</p>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h5 className="text-white font-bold mb-6 font-serif tracking-wide uppercase text-sm">{f.navTitle}</h5>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-accent transition-colors">{f.home}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{f.services}</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">{f.about}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{f.contact}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-white font-bold mb-6 font-serif tracking-wide uppercase text-sm">{f.legalTitle}</h5>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors">{f.terms}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{f.privacy}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{f.cookies}</a></li>
              <li><a href="https://anpc.ro/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">ANPC</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {currentYear} CARPOINT STEVEN SRL. {f.copyright}
          </p>
          <a
            href="#home"
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 hover:bg-accent flex items-center justify-center text-white transition-colors rounded-[2px]"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
