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
  template: `
    <section id="projects" class="section">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">
            <span class="text-gradient">{{ t.t('projects.title') }}</span>
          </h2>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project.title) {
            <div class="project-card card-hover animate-fade-in-up" [class.featured]="project.featured">
              <!-- Project Image/Icon -->
              <div class="project-header">
                <div class="project-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m18 16 4-4-4-4"/>
                    <path d="m6 8-4 4 4 4"/>
                    <path d="m14.5 4-5 16"/>
                  </svg>
                </div>
                @if (project.featured) {
                  <span class="featured-badge">Featured</span>
                }
              </div>

              <!-- Content -->
              <div class="project-content">
                <h3 class="text-xl font-bold text-[var(--text-primary)] mb-3">{{ project.title }}</h3>
                <p class="text-[var(--text-secondary)] text-sm mb-4 line-clamp-3">
                  {{ t.currentLang() === 'es' ? project.descriptionEs : project.description }}
                </p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (tech of project.technologies; track tech) {
                    <span class="tech-tag">{{ tech }}</span>
                  }
                </div>

                <!-- Links -->
                <div class="flex items-center gap-3 mt-auto">
                  @if (project.githubUrl) {
                    <a 
                      [href]="project.githubUrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="project-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      {{ t.t('projects.viewCode') }}
                    </a>
                  }
                  @if (project.demoUrl) {
                    <a 
                      [href]="project.demoUrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="project-link primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" x2="21" y1="14" y2="3"/>
                      </svg>
                      {{ t.t('projects.viewDemo') }}
                    </a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .project-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .project-card:hover {
      border-color: var(--accent-indigo);
    }

    .project-card.featured {
      border-color: var(--accent-purple);
      box-shadow: 0 0 30px rgba(139, 92, 246, 0.1);
    }

    .project-header {
      padding: 1.5rem;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .project-icon {
      width: 3.5rem;
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gradient-primary);
      border-radius: 0.75rem;
      color: white;
    }

    .featured-badge {
      background: var(--gradient-primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .project-content {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .tech-tag {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      background: var(--bg-primary);
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
      border-radius: 0.25rem;
      font-size: 0.7rem;
      font-weight: 500;
    }

    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: var(--bg-primary);
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .project-link:hover {
      border-color: var(--accent-indigo);
      color: var(--accent-indigo);
    }

    .project-link.primary {
      background: var(--gradient-primary);
      color: white;
      border: none;
    }

    .project-link.primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
    }

    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
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
