import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// ─────────────────────────────────────────────────────────────────────────────
// To make this form send real emails:
// 1. Go to https://web3forms.com and enter your email address.
// 2. They'll email you a free Access Key.
// 3. Replace the string below with your key.
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', contact: '', subject: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.contact,
          subject: form.subject || 'Mesaj nou de pe site CARPOINT STEVEN',
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', contact: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-[4px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white';

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-inner">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">{c.label}</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">{c.heading}</h3>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 text-lg">{c.desc}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 bg-gray-50 border border-gray-200">

          {/* Form */}
          <div className="lg:w-3/5 p-8 lg:p-12">
            <h4 className="text-2xl font-serif font-bold text-primary mb-6">{c.formTitle}</h4>

            {status === 'success' && (
              <div className="flex items-center gap-3 mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-[4px]">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="font-medium">{c.successMsg}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-3 mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-[4px]">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="font-medium">{c.errorMsg}</span>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{c.nameFld} *</label>
                  <input type="text" id="name" name="name" required className={inputClass} placeholder={c.namePh} value={form.name} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">{c.contactFld} *</label>
                  <input type="text" id="contact" name="contact" required className={inputClass} placeholder={c.contactPh} value={form.contact} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{c.subjectFld}</label>
                <input type="text" id="subject" name="subject" className={inputClass} placeholder={c.subjectPh} value={form.subject} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{c.messageFld} *</label>
                <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-none`} placeholder={c.messagePh} value={form.message} onChange={handleChange} />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 font-semibold hover:bg-primary/90 transition-colors rounded-[4px] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? c.sending : c.submit}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:w-2/5 bg-primary text-white p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <h4 className="text-2xl font-serif font-bold mb-8 relative z-10">{c.infoTitle}</h4>

            <ul className="space-y-8 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-medium mb-1">{c.phoneLabel}</span>
                  <a href="tel:[TELEFON]" className="block text-lg font-semibold hover:text-accent transition-colors">[TELEFON]</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-medium mb-1">{c.emailLabel}</span>
                  <a href="mailto:[EMAIL]" className="block text-lg font-semibold hover:text-accent transition-colors">[EMAIL]</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-medium mb-1">{c.locationLabel}</span>
                  <span className="block text-lg font-semibold leading-snug whitespace-pre-line">{c.locationVal}</span>
                </div>
              </li>
              <li className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-medium mb-1">{c.hoursLabel}</span>
                  <span className="block text-lg font-semibold">{c.hoursVal}</span>
                  <span className="block text-gray-400 text-sm mt-1">{c.hoursNote}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
