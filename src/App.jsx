import React, { useState, useEffect } from 'react';
import {
  Menu, X, Search, FileText, ExternalLink, Clock,
  Users, Building2, Shield, ArrowRight, ChevronRight,
  BookOpen, Landmark, AlertCircle, FileCheck
} from 'lucide-react';


import { ARCHIVE_DOCS, TIMELINE_DATA, matchesDocument, FORUM_SOURCE, COUNCIL_SOURCE } from './data.mjs';

const MANDATE_MEMBERS = [
  { name: 'Alianța Asociațiilor de Băștinași din Moldova (AABM)', role: 'Rolul de secretariat: neconfirmat', icon: Building2 },
  { name: 'Misiunea Socială „Diaconia”', role: 'Apartenența la mandat: neconfirmată', icon: Users },
  { name: 'AO CONCORDIA Proiecte Sociale Moldova', role: 'Apartenența la mandat: neconfirmată', icon: Users },
  { name: 'Uniunea Pensionarilor din Republica Moldova', role: 'Apartenența la mandat: neconfirmată', icon: Users },
  { name: 'AO „Viața fără Leucemie”', role: 'Apartenența la mandat: neconfirmată', icon: Users },
];

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'despre', label: 'Despre Consiliu' },
    { id: 'istoric', label: 'Istoric' },
    { id: 'claca', label: 'Claca Civică' },
    { id: 'contact', label: 'Contact' },
    { id: 'arhiva', label: 'Arhivă' },
  ];

  return (
    <nav aria-label="Navigare principală" className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <button aria-label="Înapoi la început" className="flex items-center text-left" onClick={() => scrollToSection('hero')}>
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-inner">
                CN
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 leading-tight text-lg">Consiliul ONG</span>
                <span className="text-xs text-blue-600 font-medium">Republica Moldova</span>
              </div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  activeSection === link.id ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </button>
            ))}

          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              aria-label={isOpen ? 'Închide meniul' : 'Deschide meniul'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ scrollToSection }) => (
  <div id="hero" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 text-blue-100 text-sm font-medium mb-8 border border-blue-700/50 backdrop-blur-sm">
        <AlertCircle size={16} className="text-yellow-400" />
        <span>Schiță de cercetare · pregătită de CohesionLab · neoficială</span>
        <button onClick={() => scrollToSection('claca')} className="underline font-bold ml-1 hover:text-white">Află mai multe</button>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
        Memoria <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
          Consiliului ONG
        </span>
      </h1>

      <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-blue-100 font-light leading-relaxed mb-10">
        Un punct de pornire pentru reconstituirea memoriei Consiliului ONG din Republica Moldova. Sursele documentate sunt separate de informațiile încă neconfirmate.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <button
          onClick={() => scrollToSection('claca')}
          className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          Vezi propunerea Claca Civică
          <ArrowRight size={20} />
        </button>
        <button
          onClick={() => scrollToSection('arhiva')}
          className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2"
        >
          <BookOpen size={20} />
          Caută în arhivă
        </button>
      </div>
    </div>
  </div>
);

const About = () => (
  <div id="despre" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            Despre CN ONG
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Consiliul ONG și Centrul CONTACT sunt menționați ca organizatori ai Forumului ONG din 4–5 decembrie 2024, în anunțul Fundației Est-Europene. <a className="text-blue-700 underline" href={FORUM_SOURCE} rel="noopener noreferrer">Vezi anunțul din 2024</a>.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            <strong className="text-amber-900">De verificat:</strong> statutul juridic, data constituirii și modelul secretariatului. Schița inițială descrie un secretariat rotativ și lipsa personalității juridice; aceste afirmații nu sunt validate aici.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Mandatul XII (2025-2026)</h3>
            <p className="text-blue-800 text-sm mb-4">
              CRDC relatează alegerea unui Consiliu cu 11 ONG-uri pentru 2025–2026. Componența nominală și secretariatul actual rămân neconfirmate. <a className="underline" href={COUNCIL_SOURCE} rel="noopener noreferrer">Vezi relatarea din 5 decembrie 2024</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Shield className="text-blue-600" size={24} />
                Organizații de verificat
              </h3>
            </div>
            <p className="px-6 py-4 bg-amber-50 text-amber-900 text-sm">Listă preluată din schița inițială, neconfirmată și posibil incompletă. Nu este lista oficială a membrilor.</p>
            <ul className="divide-y divide-gray-100">
              {MANDATE_MEMBERS.map((member, idx) => (
                <li key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${idx === 0 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                      <member.icon size={24} />
                    </div>
                    <div>
                      <p className="text-md font-bold text-gray-900">{member.name}</p>
                      <p className={`text-sm mt-1 font-medium ${idx === 0 ? 'text-blue-600' : 'text-gray-500'}`}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => (
  <div id="istoric" className="py-24 bg-gray-50 border-y border-gray-200">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Repere istorice de verificat
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Repere din schița inițială, în curs de verificare. Menționarea unui eveniment nu confirmă contribuția Consiliului la acesta.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 rounded-full hidden md:block"></div>

        <div className="space-y-12">
          {TIMELINE_DATA.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 border-4 border-white rounded-full hidden md:block z-10 shadow-sm"></div>

              {/* Content Box */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full md:w-11/12 transition-transform hover:-translate-y-1 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-blue-700">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <p className="mt-3 text-sm font-semibold text-amber-800">De verificat · sursa primară lipsește</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ClacaCivica = ({ scrollToSection }) => (
  <div id="claca" className="py-24 bg-blue-900 text-white relative overflow-hidden">
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 right-0 -mr-32 -mt-32 opacity-10">
      <svg width="404" height="404" fill="none" viewBox="0 0 404 404"><defs><pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect></svg>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 text-yellow-300 text-sm font-bold tracking-wider mb-4 border border-yellow-500/30">
          PROPUNERE · CALENDAR NECONFIRMAT
        </span>
        <h2 className="text-3xl font-extrabold sm:text-5xl mb-6 text-white">
          Claca Civică
        </h2>
        <p className="text-xl text-blue-100 leading-relaxed">
          Concept din materialul inițial, prezentat pentru discuție. Nu confirmăm adoptarea lui, o schimbare de statut juridic sau un calendar oficial.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Users,
            title: 'Consultări Zonale',
            desc: 'Propunere de întâlniri regionale pentru discutarea viitorului Consiliului. Organizarea și datele întâlnirilor sunt neconfirmate.'
          },
          {
            icon: Landmark,
            title: 'Noua Arhitectură',
            desc: 'Idee de structură instituțională durabilă. Nu există în această arhivă o hotărâre verificată de aprobare.'
          },
          {
            icon: FileCheck,
            title: 'Un viitor Forum',
            desc: 'Un posibil Forum apare în schiță. Data din ianuarie 2027, ordinea de zi și eventualul vot nu sunt confirmate.'
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all">
            <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <item.icon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-blue-100 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 sm:p-12 text-center md:text-left md:flex items-center justify-between shadow-2xl">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mb-2">Ajută la completarea arhivei</h3>
          <p className="text-blue-900/80 text-lg">Ai o rezoluție, un raport sau o sursă primară? Consultă informațiile de contact publicate anterior. Acest site nu colectează donații.</p>
        </div>
        <div>
          <button onClick={() => scrollToSection('contact')} className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg flex items-center gap-2 mx-auto md:mx-0">
            Vezi contactul publicat <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocs = ARCHIVE_DOCS.filter(doc => matchesDocument(doc, searchTerm));

  return (
    <div id="arhiva" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Arhiva Documentară
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Surse publicate și documente încă de regăsit. Legăturile duc la editorii originali; titlurile neconfirmate nu sunt prezentate ca fișiere disponibile.
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              aria-label="Caută în arhivă"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all sm:text-sm"
              placeholder="Caută documente, rezoluții, legi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 bg-gray-100 font-semibold text-gray-700 text-sm hidden md:grid">
            <div className="col-span-6">Titlu Document</div>
            <div className="col-span-2">Categorie</div>
            <div className="col-span-2">An</div>
            <div className="col-span-2 text-right">Acțiune</div>
          </div>

          <ul className="divide-y divide-gray-200">
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc) => (
                <li key={doc.id} className="p-4 hover:bg-white transition-colors flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center">
                  <div className="col-span-6 flex items-start gap-3 mb-2 md:mb-0">
                    <FileText className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <div><span className="font-medium text-gray-900">{doc.title}</span><p className={`mt-1 text-xs font-semibold ${doc.url ? 'text-blue-700' : 'text-amber-800'}`}>{doc.url ? 'Sursă publicată · verificată la 12.10.2026' : 'Titlu neconfirmat · original indisponibil'}</p></div>
                  </div>
                  <div className="col-span-2 text-sm text-gray-500 mb-1 md:mb-0">
                    <span className="md:hidden font-semibold mr-2">Categorie:</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {doc.category}
                    </span>
                  </div>
                  <div className="col-span-2 text-sm text-gray-500 mb-4 md:mb-0 flex items-center gap-1">
                    <span className="md:hidden font-semibold mr-1">An:</span>
                    <Clock size={14} className="hidden md:inline" /> {doc.year}
                  </div>
                  <div className="col-span-2 md:text-right">
                    {doc.url ? (
                      <a href={doc.url} rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-md w-full md:w-auto justify-center" aria-label={`Vezi sursa: ${doc.title}`}>
                        <ExternalLink size={16} /> Vezi sursa
                      </a>
                    ) : (
                      <details className="text-sm text-amber-900 text-left">
                        <summary className="cursor-pointer rounded-md bg-amber-50 px-3 py-2">De ce nu pot descărca?</summary>
                        <p className="mt-2">Titlu din schița inițială. Existența și versiunea originală nu sunt încă verificate; nu avem un fișier de oferit. <a href="#contact" className="underline">Ajută la regăsire</a>.</p>
                      </details>
                    )}
                  </div>
                </li>
              ))
            ) : (
              <li className="p-8 text-center text-gray-500">
                <p role="status">Nu s-au găsit documente conform criteriilor de căutare.</p><button className="mt-3 rounded-md bg-blue-50 px-4 py-2 text-blue-800" onClick={() => setSearchTerm('')}>Resetează căutarea</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
              CN
            </div>
            <span className="font-bold text-white text-lg">Consiliul ONG</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Schiță de cercetare pentru reconstituirea memoriei Consiliului ONG. Nu este site-ul oficial și nu exprimă poziții adoptate de Consiliu.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact publicat în 2024</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Building2 size={18} className="text-gray-500 flex-shrink-0" />
              <span>Secretariatul actual: neconfirmat. Adresa de mai jos apare în anunțul Forumului ONG 2024; funcționarea ei în prezent nu este verificată.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-500 font-bold">Email:</span>
              <a href="mailto:consiliulong.md@gmail.com" className="hover:text-white transition-colors">consiliulong.md@gmail.com</a>
            </li>
          </ul>
          <a className="inline-block mt-4 text-sm text-blue-200 underline" href={FORUM_SOURCE} rel="noopener noreferrer">Verifică sursa contactului (2024)</a>
          <p className="mt-3 text-xs text-gray-400">Apăsarea adresei deschide aplicația de email. Nimic nu se trimite automat; nu transmite documente confidențiale fără acordul destinatarului.</p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Reconstituire Digitală</h4>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <p className="text-sm text-gray-400 mb-2">
              Această schiță este pregătită pentru revizuire de
            </p>
            <p className="text-white font-bold text-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              Cohesion Lab
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} CohesionLab · Schiță neoficială pentru CN ONG.</p>
        <div className="flex gap-4">
          <a href="./termeni.html" className="hover:text-white transition-colors">Termeni de utilizare</a>
          <a href="./confidentialitate.html" className="hover:text-white transition-colors">Confidențialitate</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjusted for fixed header height
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
    setActiveSection(sectionId);
  };

  // Simple scroll spy to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'despre', 'istoric', 'claca', 'arhiva', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-200 selection:text-blue-900">
      <a className="skip-link" href="#continut">Sari la conținut</a>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main id="continut" tabIndex={-1}>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Timeline />
        <ClacaCivica scrollToSection={scrollToSection} />
        <Archive />
      </main>
      <Footer />
    </div>
  );
}
