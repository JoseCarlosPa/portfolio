import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly LANG_KEY = 'language';
  
  currentLang = signal<Language>(this.getInitialLanguage());

  private translations: Translations = {
    // Navigation
    'nav.about': { en: 'About', es: 'Sobre mí' },
    'nav.experience': { en: 'Experience', es: 'Experiencia' },
    'nav.skills': { en: 'Skills', es: 'Habilidades' },
    'nav.projects': { en: 'Projects', es: 'Proyectos' },
    'nav.education': { en: 'Education', es: 'Educación' },
    'nav.contact': { en: 'Contact', es: 'Contacto' },
    
    // Hero
    'hero.greeting': { en: "Hi, I'm", es: 'Hola, soy' },
    'hero.title': { en: 'Fullstack Software Developer', es: 'Desarrollador de Software Fullstack' },
    'hero.subtitle': { en: 'Building scalable web applications with passion and precision', es: 'Creando aplicaciones web escalables con pasión y precisión' },
    'hero.downloadCV': { en: 'Download CV', es: 'Descargar CV' },
    'hero.saveContact': { en: 'Save Contact', es: 'Guardar Contacto' },
    'hero.location': { en: 'Querétaro, México', es: 'Querétaro, México' },
    
    // About
    'about.title': { en: 'About Me', es: 'Sobre Mí' },
    'about.description': { 
      en: 'Results-driven Computer Science Engineer with 6+ years of experience in Fullstack development. Specialist in building scalable web applications using React and PHP/Laravel. Proven track record of leading high-impact projects, including CRM integrations for major social media APIs (WhatsApp, Instagram, Facebook) and specialized e-learning platforms. Strong focus on UX/UI, Disciplined Agile Delivery (DAD), and delivering clean, maintainable code.',
      es: 'Ingeniero en Ciencias de la Computación orientado a resultados con más de 6 años de experiencia en desarrollo Fullstack. Especialista en la construcción de aplicaciones web escalables usando React y PHP/Laravel. Historial comprobado de liderazgo en proyectos de alto impacto, incluyendo integraciones CRM para APIs de redes sociales (WhatsApp, Instagram, Facebook) y plataformas de e-learning especializadas. Fuerte enfoque en UX/UI, Disciplined Agile Delivery (DAD) y entrega de código limpio y mantenible.'
    },
    'about.yearsExp': { en: 'Years of Experience', es: 'Años de Experiencia' },
    'about.projects': { en: 'Projects Completed', es: 'Proyectos Completados' },
    'about.technologies': { en: 'Technologies', es: 'Tecnologías' },
    
    // Experience
    'experience.title': { en: 'Work Experience', es: 'Experiencia Laboral' },
    'experience.present': { en: 'Present', es: 'Presente' },
    
    // Skills
    'skills.title': { en: 'Technical Skills', es: 'Habilidades Técnicas' },
    'skills.frontend': { en: 'Frontend', es: 'Frontend' },
    'skills.backend': { en: 'Backend & Database', es: 'Backend y Base de Datos' },
    'skills.tools': { en: 'Tools & Platforms', es: 'Herramientas y Plataformas' },
    'skills.languages': { en: 'Programming Languages', es: 'Lenguajes de Programación' },
    'skills.soft': { en: 'Soft Skills', es: 'Habilidades Blandas' },
    
    // Projects
    'projects.title': { en: 'Featured Projects', es: 'Proyectos Destacados' },
    'projects.viewCode': { en: 'View Code', es: 'Ver Código' },
    'projects.viewDemo': { en: 'Live Demo', es: 'Demo en Vivo' },
    
    // Education
    'education.title': { en: 'Education & Certifications', es: 'Educación y Certificaciones' },
    'education.degree': { en: 'B.S. in Computer Science', es: 'Ingeniería en Ciencias de la Computación' },
    'education.graduated': { en: 'Graduated', es: 'Graduado' },
    'education.gpa': { en: 'GPA', es: 'Promedio' },
    'education.certifications': { en: 'Certifications', es: 'Certificaciones' },
    'education.awards': { en: 'Awards & Recognition', es: 'Premios y Reconocimientos' },
    
    // Contact
    'contact.title': { en: 'Get In Touch', es: 'Contáctame' },
    'contact.subtitle': { en: "Let's work together on your next project", es: 'Trabajemos juntos en tu próximo proyecto' },
    'contact.email': { en: 'Email', es: 'Correo' },
    'contact.phone': { en: 'Phone', es: 'Teléfono' },
    'contact.location': { en: 'Location', es: 'Ubicación' },
    
    // Footer
    'footer.rights': { en: 'All rights reserved', es: 'Todos los derechos reservados' },
    'footer.madeWith': { en: 'Made with', es: 'Hecho con' },
    
    // Common
    'common.learnMore': { en: 'Learn More', es: 'Saber Más' },
    'common.viewAll': { en: 'View All', es: 'Ver Todo' },
  };

  constructor() {
    // Language persistence is handled in toggleLanguage and setLanguage methods
  }

  private getInitialLanguage(): Language {
    const saved = localStorage.getItem(this.LANG_KEY) as Language;
    if (saved && (saved === 'en' || saved === 'es')) {
      return saved;
    }
    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  }

  t(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[this.currentLang()];
  }

  toggleLanguage(): void {
    this.currentLang.update(current => current === 'en' ? 'es' : 'en');
    localStorage.setItem(this.LANG_KEY, this.currentLang());
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    localStorage.setItem(this.LANG_KEY, lang);
  }
}
