import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Lock, MapPin, HeartHandshake, Users, Download, Menu, X, Apple, CheckCircle2, ChevronRight, Smartphone } from 'lucide-react';

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: i % 2 === 0 ? 'var(--color-purple-light)' : 'var(--color-gold-accent)',
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Haqqımızda', href: '#about' },
    { name: 'Xüsusiyyətlər', href: '#features' },
    { name: 'Necə İşləyir', href: '#how-it-works' },
    { name: 'Komanda', href: '#team' },
    { name: 'Əlaqə', href: '#contact' },
  ];

  return (
    <>
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white-warm border-b border-purple-light/15 h-20 flex shrink-0`}>
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-purple-deep" />
            <span className="font-display font-bold text-2xl text-purple-deep tracking-tighter">SƏS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-text-dark hover:text-purple-brand transition-colors">
                {link.name}
              </a>
            ))}
            <button className="bg-gradient-cta text-white font-display font-bold px-6 py-2.5 rounded-full text-sm shadow-lg shadow-purple-deep/20 hover:-translate-y-0.5 transition-all">
              Yüklə
            </button>
          </div>

          <button className="md:hidden text-text-dark" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 glass-nav bg-white/95 flex flex-col justify-center items-center">
          <button className="absolute top-6 right-6 text-text-dark" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col gap-6 text-center">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="font-display font-bold text-2xl text-purple-deep">
                {link.name}
              </a>
            ))}
            <button className="mt-8 bg-gradient-cta text-white font-display font-bold px-8 py-4 rounded-full text-lg shadow-[0_4px_12px_rgba(58,14,110,0.2)]">
              Tətbiqi Yüklə
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-hero">
      <Particles />
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Shield className="w-[60vh] h-[60vh] text-purple-deep" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid md:grid-cols-12 gap-12 items-center w-full">
        <div className="md:col-span-7 flex flex-col items-start justify-center text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-lavender-mist border border-purple-light/20 text-purple-brand px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8"
          >
            <span>🛡️</span> Gizli. Təhlükəsiz. Etibarlı.
          </motion.div>
          
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="block text-purple-deep"
            >
              Səssiz Qalma,
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block bg-clip-text text-transparent bg-gradient-cta"
            >
              Dəyişimə Səbəb Ol!
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-text-muted mb-8 max-w-md leading-relaxed text-balance"
          >
            Zorakılığa məruz qalan və ya təhlükədə olan qadınlar üçün gizli, təhlükəsiz və etibarlı yardım sistemi.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-4 w-full sm:w-auto"
          >
            <button className="flex items-center justify-center gap-3 bg-gradient-cta text-white font-display font-bold px-8 py-4 rounded-xl hover:-translate-y-1 transition-all w-full sm:w-auto">
              <Download className="w-5 h-5" />
              Tətbiqi Yüklə
            </button>
            <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-purple-brand text-purple-brand font-display font-bold px-8 py-4 rounded-xl hover:bg-purple-brand/5 transition-all w-full sm:w-auto">
              Necə İşləyir?
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 mt-4 opacity-70"
          >
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-purple-brand">🔒</span> End-to-End Şifrələnmiş
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-purple-brand">📍</span> Real-vaxt GPS İzləmə
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-purple-brand">🎙</span> 30s Audio Qeyd
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-5 relative mt-16 md:mt-0 flex justify-center">
          <div className="bg-gradient-gold-glow absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
          
          {/* Subtle Silhouette Background */}
          <div className="absolute inset-0 flex justify-center items-end opacity-20 -z-10 pointer-events-none">
            <svg viewBox="0 0 200 300" className="w-[80%] h-auto max-h-full fill-gold-light" preserveAspectRatio="xMidYMax slice">
              <path d="M100,50 C120,50 135,65 135,85 C135,100 125,115 110,125 C110,150 130,200 140,250 L60,250 C70,200 90,150 90,125 C75,115 65,100 65,85 C65,65 80,50 100,50 Z" />
              <path d="M100,30 C110,30 115,35 115,45 C115,55 110,60 100,60 C90,60 85,55 85,45 C85,35 90,30 100,30 Z" />
            </svg>
          </div>

          {/* Calculator Mockup */}
          <motion.div 
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[240px] h-[480px] bg-black border-[8px] border-[#333] rounded-[36px] relative shadow-[0_40px_80px_-20px_rgba(58,14,110,0.4)] flex flex-col p-4 z-10 overflow-hidden transform rotate-3"
          >
            <div className="w-1/2 h-6 bg-black mx-auto rounded-b-2xl mb-8 relative z-20"></div>
            
            <div className="flex-1 flex flex-col justify-end relative">
              <div className="text-right text-4xl text-white font-light pr-4 mb-8 font-display">
                <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>9999</motion.span>
              </div>
              <div className="grid grid-cols-4 gap-3 text-[14px]">
                {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+'].map((btn, i) => (
                  <div key={i} className={`aspect-square rounded-full flex items-center justify-center font-medium
                    ${['÷', '×', '-', '+'].includes(btn) ? 'bg-[#FF9F0A] text-white' : 
                      ['C', '±', '%'].includes(btn) ? 'bg-[#A5A5A5] text-black' : 'bg-[#333] text-white'}
                    ${btn === '=' ? 'bg-[#FF9F0A] text-white' : ''}`}>
                    {btn}
                  </div>
                ))}
                <div className="col-span-2 !aspect-auto !rounded-full bg-[#333] text-white flex items-center pl-4 font-medium">0</div>
                <div className="aspect-square rounded-full flex items-center justify-center font-medium bg-[#333] text-white">.</div>
                <div className="aspect-square rounded-full flex items-center justify-center font-medium bg-[#FF9F0A] text-white">=</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsCounter = ({ value, label, suffix = '' }) => {
  return (
    <div className="flex flex-col">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl text-purple-deep flex items-baseline gap-1"
      >
        <span>{value}</span>
        <span>{suffix}</span>
      </motion.div>
      <span className="text-xs text-text-muted font-semibold uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="bg-lavender-pale border-t border-purple-light/30 py-8 relative z-20 h-32 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        <div className="grid grid-cols-2 md:flex md:divide-x divide-lavender flex-1">
          <div className="md:pr-10 py-2"><StatsCounter value="10,000" suffix="+" label="Aktiv İstifadəçi" /></div>
          <div className="md:px-10 py-2"><StatsCounter value="4.9" suffix="★" label="App Store Reytinqi" /></div>
          <div className="md:px-10 py-2"><StatsCounter value="< 3" suffix="san" label="Ortalama Cavab" /></div>
        </div>
        <div className="flex flex-col items-end shrink-0 hidden lg:flex">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold">Built by Catalyst</span>
            <div className="w-8 h-8 relative">
              <svg viewBox="0 0 24 24" fill="none" className="text-purple-brand">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
              </svg>
            </div>
          </div>
          <p className="text-[10px] text-text-muted">Innovation. Impact. Code.</p>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const cards = [
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Gizli & Təhlükəsiz",
      desc: "Tamamilə işlək kalkulyator kimi görünür. Heç kim onun əsl məqsədini bilməyəcək. 9999= — və SOS aktivləşir."
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Ani Yardım & Məkan İzləmə",
      desc: "Yüksək dəqiqlikli GPS koordinatlarınız Google Maps linki ilə birlikdə etibarlı kontaktlarınıza göndərilir."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-white" />,
      title: "Hüquqi və Psixoloji Dəstək",
      desc: "SMS və WhatsApp vasitəsilə eyni anda həyəcan siqnalı göndərilir. Səs yazısı sübut kimi saxlanılır."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Cəmiyyətdə Fərq Yarat",
      desc: "Hər yükləmə, hər paylaşım kiməsə səssiz qalmaqdan xilas olmağa kömək edir."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-purple-deep mb-4">Nə Üçün SƏS?</h2>
          <p className="text-lg text-text-muted">Hər funksiyanız gizli, hər an qorunursunuz.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-[24px] p-8 lg:p-10 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center mb-6 shadow-lg shadow-purple-brand/20 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-purple-deep mb-3">{card.title}</h3>
              <p className="text-text-muted leading-relaxed text-balance">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Download className="w-6 h-6 text-purple-deep" />,
      title: "Quraşdır & Kontaktları Əlavə Et",
      desc: "Tətbiqi yüklə, kalkulyator parametrlərindən etibarlı kontaktlarını əlavə et, icazələri aktivləşdir."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-deep" />,
      title: "9999= Yaz",
      desc: "Kalkulyatorda 9999= yazaraq gizli SOS protokolunu aktiv et. Ekranda heç bir dəyişiklik olmayacaq."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-deep" />,
      title: "Yardım Yolda",
      desc: "GPS, audio qeyd və həyəcan mesajları avtomatik olaraq kontaktlarına göndərilir. Sən təhlükəsizsən."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lavender-pale via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">3 Sadə Addım</h2>
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-white/20">
            <motion.div 
              className="h-full bg-gold-accent w-full origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-[88px] h-[88px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-white">{step.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  return (
    <section className="py-24 bg-lavender-pale overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 perspective-1000">
          {/* Phone 1: Settings */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 5 }}
            viewport={{ once: true }}
            className="w-[260px] md:-ml-20 scale-90 md:scale-100 opacity-60 z-0 bg-[#f5f5f7] rounded-[40px] p-2 border-[4px] border-[#e5e5e8] shadow-xl"
          >
            <div className="bg-white rounded-[32px] h-[540px] flex flex-col pt-12 px-4 shadow-inner">
               <h3 className="font-semibold text-center mb-6">Calculator Settings</h3>
               <div className="space-y-4">
                 <div className="h-12 rounded-xl bg-gray-100 flex items-center px-4"><span className="w-6 h-6 rounded-full bg-purple-brand/20 mr-3"></span>Voice Input</div>
                 <div className="h-12 rounded-xl bg-gray-100 flex items-center px-4"><span className="w-6 h-6 rounded-full bg-purple-brand/20 mr-3"></span>Location Tag</div>
                 <div className="h-12 rounded-xl bg-gray-100 flex items-center px-4"><span className="w-6 h-6 rounded-full bg-purple-brand/20 mr-3"></span>Quick Contacts</div>
               </div>
            </div>
          </motion.div>

          {/* Phone 2: Calculator (Center) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-20 w-[280px] bg-[#1C1C1E] rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-[6px] border-[#303033]"
          >
            <div className="absolute inset-0 bg-gradient-gold-glow -z-10 blur-3xl scale-125 rounded-full"></div>
            <div className="bg-[#1C1C1E] rounded-[32px] h-[580px] flex flex-col justify-end p-5 relative overflow-hidden">
               <div className="text-right text-white font-mono text-5xl mb-6 truncate font-light tracking-tight pb-4 border-b border-white/10 border-b-2">
                  <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>9999</motion.span>
               </div>
               <div className="grid grid-cols-4 gap-2.5 text-xl">
                  {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+'].map((btn, i) => (
                    <div key={i} className={`aspect-square rounded-full flex items-center justify-center font-medium ${['÷', '×', '−', '+'].includes(btn) ? 'bg-[#FF9F0A]' : ['C', '±', '%'].includes(btn) ? 'bg-[#A5A5A5] text-black' : 'bg-[#333333] text-white'}`}>
                      {btn}
                    </div>
                  ))}
                  <div className="col-span-2 aspect-[2.1/1] bg-[#333333] text-white rounded-full flex items-center pl-6 font-medium">0</div>
                  <div className="aspect-square rounded-full flex items-center justify-center font-medium bg-[#333333] text-white">.</div>
                  <div className="aspect-square rounded-full flex items-center justify-center font-medium bg-[#FF9F0A] text-white">=</div>
               </div>
            </div>
          </motion.div>

           {/* Phone 3: SOS Active */}
           <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: -5 }}
            viewport={{ once: true }}
            className="w-[260px] md:-mr-20 scale-90 md:scale-100 opacity-60 z-0 bg-[#1C1C1E] rounded-[40px] p-2 border-[4px] border-[#303033] shadow-xl relative"
          >
            <div className="bg-[#1C1C1E] rounded-[32px] h-[540px] flex flex-col relative overflow-hidden">
              {/* Fake calculator bg */}
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                  {/* ... same calc grid ... hidden for brevity */}
               </div>
               <div className="absolute inset-0 bg-danger-red/20 backdrop-blur-xl flex flex-col items-center justify-center border-4 border-danger-red/50 rounded-[32px]">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-danger-red/30 flex items-center justify-center mb-4"
                  >
                     <Shield className="w-10 h-10 text-danger-red" />
                  </motion.div>
                  <p className="text-white font-bold font-display text-lg">SOS AKTİVDİR</p>
                  <p className="text-white/70 text-xs mt-2 text-center px-4">Status göndərilir...</p>
               </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-16 max-w-lg mx-auto">
          <p className="font-serif italic text-2xl text-purple-deep leading-relaxed">
            "Görünüşdə kalkulyator.<br/>Əslində — sənin qoruyucun."
          </p>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-24 bg-white-warm relative overflow-hidden flex items-center justify-center min-h-[400px]">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="font-serif text-[400px] leading-none text-purple-brand font-black">"</span>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <blockquote className="font-serif italic text-2xl md:text-3xl text-purple-deep leading-relaxed mb-8 text-balance">
          "Zorakılıq qaranlıqda böyüyür, onu texnologiyanın işığı ilə yox edək."
        </blockquote>
        <div className="font-display font-semibold tracking-wider uppercase text-purple-brand text-sm">
          — SƏS Komandası
        </div>
      </div>
    </section>
  );
};

const Trust = () => {
  const trusts = [
    { icon: "🔐", title: "AES-256 Şifrələmə", detail: "Bütün məlumatlar end-to-end şifrələnir" },
    { icon: "☁️", title: "Firebase Cloud", detail: "Google-un təhlükəsiz infrastrukturu" },
    { icon: "📱", title: "Cross-Platform", detail: "iOS, Android, Web — hər yerdə işləyir" },
    { icon: "🔕", title: "Sıfır UI Dəyişikliyi", detail: "SOS zamanı ekranda heç nə dəyişmir" },
    { icon: "🌐", title: "Twilio API", detail: "Sms + WhatsApp paralel göndəriş" },
    { icon: "🎙", title: "AAC 128kbps", detail: "Yüksək keyfiyyətli 30 saniyəlik audio sübut" }
  ];

  return (
    <section className="py-24 bg-white-warm border-t border-purple-light/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-purple-deep">Texnoloji Güvən</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trusts.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-lavender-mist hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-lavender-mist flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>
              <h4 className="font-display font-bold text-lg text-purple-deep mb-2">{item.title}</h4>
              <p className="text-sm text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-cta relative overflow-hidden">
      <div className="absolute inset-0">
         <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} 
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl pointer-events-none"
         ></motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4 tracking-tight">Səssiz Qalma. SƏS-i Yüklə.</h2>
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-lg text-balance">Bir toxunuşla təhlükəsizliyini təmin et.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="flex items-center gap-3 bg-white text-text-dark px-8 py-3.5 rounded-full hover:scale-105 transition-transform">
            <Apple className="w-6 h-6" />
            <div className="text-left leading-none">
              <div className="text-[10px] text-text-muted font-semibold uppercase tracking-wider mb-0.5">App Store-dan</div>
              <div className="font-bold font-display text-lg">Yükləyin</div>
            </div>
          </button>
          <button className="flex items-center gap-3 bg-white text-text-dark px-8 py-3.5 rounded-full hover:scale-105 transition-transform">
            <div className="w-6 h-6 flex justify-center items-center">▶</div> {/* Stand-in for play store icon */}
            <div className="text-left leading-none">
              <div className="text-[10px] text-text-muted font-semibold uppercase tracking-wider mb-0.5">Google Play-dən</div>
              <div className="font-bold font-display text-lg">Yükləyin</div>
            </div>
          </button>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 p-4 rounded-full backdrop-blur-sm"
        >
          <Shield className="w-8 h-8 text-white" />
        </motion.div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white-warm text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-purple-deep mb-2">SƏS-in Arxasındakı Komanda</h2>
        <p className="font-display text-purple-brand font-semibold tracking-wider uppercase text-sm mb-12">Catalyst — Innovation. Impact. Code.</p>
        
        {/* Synthetic Catalyst Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Atom rings */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-purple-brand/30 rounded-full scale-100" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-purple-brand/40 rounded-full scale-80 scale-x-125 rotate-45" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-purple-brand/40 rounded-full scale-80 scale-y-125 -rotate-45" />
            {/* Nucleus starburst */}
            <div className="w-8 h-8 bg-gradient-cta rounded-full shadow-[0_0_20px_var(--color-purple-brand)]"></div>
          </div>
        </div>

        <p className="text-text-muted text-lg leading-relaxed text-balance max-w-2xl mx-auto mb-12">
          "Biz texnologiyanı sosial təsir üçün istifadə edən developer komandasıyıq. SƏS — bizim missiyamızdır."
        </p>

        <div className="flex flex-wrap justify-center gap-6">
           <div className="w-16 h-16 rounded-full bg-gradient-glass border border-purple-light/30"></div>
           <div className="w-16 h-16 rounded-full bg-gradient-glass border border-purple-light/30"></div>
           <div className="w-16 h-16 rounded-full bg-gradient-glass border border-purple-light/30"></div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1A0A2E] text-white/50 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-purple-light" />
              <span className="font-display font-bold text-2xl text-white tracking-tight">SƏS</span>
            </div>
            <p className="text-sm">Gizli. Təhlükəsiz. Etibarlı. Zorakılığa qarşı texnologiya.</p>
            <div className="mt-4 flex items-center gap-2 text-xs">
               <div className="w-4 h-4 bg-purple-brand rounded-full flex items-center justify-center text-[8px] text-white">C</div>
               Built by Catalyst
            </div>
          </div>

          <div className="flex flex-col gap-3">
             <h4 className="font-display font-bold text-white mb-2">Keçidlər</h4>
             <a href="#" className="hover:text-white transition-colors text-sm">Haqqımızda</a>
             <a href="#features" className="hover:text-white transition-colors text-sm">Xüsusiyyətlər</a>
             <a href="#how-it-works" className="hover:text-white transition-colors text-sm">Necə İşləyir</a>
             <a href="#" className="hover:text-white transition-colors text-sm">Əlaqə</a>
             <a href="#" className="hover:text-white transition-colors text-sm">Məxfilik Siyasəti</a>
          </div>

          <div className="flex flex-col gap-3">
             <h4 className="font-display font-bold text-white mb-2">Əlaqə</h4>
             <p className="text-sm">hello@catalyst.az</p>
             <div className="flex gap-4 mt-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">In</div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">Li</div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">Gh</div>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs">
          © 2026 SƏS — Səssiz Yardım Sistemi. Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-light/30 scroll-smooth">
      <NavBar />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <Showcase />
        <Testimonial />
        <Trust />
        <CTA />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

