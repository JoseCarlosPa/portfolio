import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface Project {
  title: string;
  description: string;
  descriptionEs: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  t = inject(TranslationService);

  projects: Project[] = [
    {
      title: 'E-learning Roche',
      description: 'Architected a digital learning platform for medical professionals, featuring complex course management, secure assessments, and user progress tracking. Focus: Usability and secure data handling.',
      descriptionEs: 'Arquitecté una plataforma de aprendizaje digital para profesionales médicos, con gestión compleja de cursos, evaluaciones seguras y seguimiento de progreso. Enfoque: Usabilidad y manejo seguro de datos.',
      technologies: ['Laravel', 'React', 'MySQL', 'Healthcare'],
      featured: true
    },
    {
      title: 'Finance Tracker App',
      description: 'Developed a full-stack personal finance tool for budget tracking and automated reporting. Implemented advanced state management and data visualization charts.',
      descriptionEs: 'Desarrollé una herramienta de finanzas personales full-stack para seguimiento de presupuesto y reportes automatizados. Implementé gestión avanzada de estado y gráficas de visualización.',
      technologies: ['React', 'TypeScript', 'Charts'],
      githubUrl: 'https://github.com/JoseCarlosPa/fintrac',
      featured: true
    },
    {
      title: 'Leadsales CRM',
      description: 'Key modules for multi-channel CRM enabling communication across WhatsApp, Instagram, and Facebook for thousands of concurrent users.',
      descriptionEs: 'Módulos clave para CRM multicanal habilitando comunicación a través de WhatsApp, Instagram y Facebook para miles de usuarios concurrentes.',
      technologies: ['React', 'Laravel', 'WhatsApp API', 'Meta API'],
      featured: true
    },
    {
      title: 'Mini Shell',
      description: 'Final project: A mini shell developed in C for advanced programming subject. Demonstrates low-level systems programming skills.',
      descriptionEs: 'Proyecto final: Mini shell desarrollado en C para la materia de programación avanzada. Demuestra habilidades de programación de sistemas de bajo nivel.',
      technologies: ['C', 'Linux', 'Systems'],
      githubUrl: 'https://github.com/JoseCarlosPa/mini-shell'
    },
    {
      title: 'Drag and Drop Demo',
      description: 'Demo application showcasing drag and drop functionality for LeadSales React tests with modern UI patterns.',
      descriptionEs: 'Aplicación demo mostrando funcionalidad de arrastrar y soltar para pruebas de React en LeadSales con patrones modernos de UI.',
      technologies: ['React', 'TypeScript', 'DnD'],
      githubUrl: 'https://github.com/JoseCarlosPa/drag-and-drop-demo',
      demoUrl: 'https://josecarlospa.github.io/drag-and-drop-demo/'
    },
    {
      title: 'IA Image Recognition',
      description: 'Machine learning project for image recognition using Python and modern AI/ML libraries.',
      descriptionEs: 'Proyecto de machine learning para reconocimiento de imágenes usando Python y librerías modernas de IA/ML.',
      technologies: ['Python', 'ML', 'AI'],
      githubUrl: 'https://github.com/JoseCarlosPa/IA-Image-recognition'
    }
  ];
}
