import { useState, useEffect } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Lang } from '../i18n/translations';

const LANGS: Lang[] = ['ro', 'en', 'de'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-primary/95 text-white py-5'
      }`}
    >
      <div className="container-inner flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 z-50 group">
          <Truck className="w-8 h-8 text-accent" />
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl leading-none tracking-wide ${isScrolled ? 'text-primary' : 'text-white'}`}>
              CARPOINT STEVEN
            </span>
            <span className={`text-[10px] font-sans font-semibold tracking-[0.2em] ${isScrolled ? 'text-secondary' : 'text-gray-300'}`}>
              TRANSPORT LOGISTICS
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-primary' : 'text-gray-200'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Language switcher */}
          <div className={`flex items-center gap-0 border text-xs font-bold ${isScrolled ? 'border-gray-300' : 'border-white/30'}`}>
            {LANGS.map((l, i) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1.5 uppercase transition-colors ${
                  i < LANGS.length - 1
                    ? isScrolled ? 'border-r border-gray-300' : 'border-r border-white/30'
                    : ''
                } ${
                  lang === l
                    ? 'bg-accent text-white'
                    : isScrolled
                    ? 'text-primary hover:text-accent'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className={`px-5 py-2.5 text-sm font-semibold transition-colors border-2 ${
              isScrolled
                ? 'bg-accent text-white border-accent hover:bg-accent/90'
                : 'bg-transparent text-white border-white hover:bg-white hover:text-primary'
            }`}
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-white hover:text-accent transition-colors"
          >
            {link.name}
          </a>
        ))}

        {/* Language switcher (mobile) */}
        <div className="flex items-center gap-0 border border-white/30 mt-4">
          {LANGS.map((l, i) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-2 uppercase text-sm font-bold transition-colors ${
                i < LANGS.length - 1 ? 'border-r border-white/30' : ''
              } ${lang === l ? 'bg-accent text-white' : 'text-gray-300 hover:text-white'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
