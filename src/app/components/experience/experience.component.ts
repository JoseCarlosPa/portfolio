import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="section">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="section-title">
            <span class="text-gradient">{{ t.t('experience.title') }}</span>
          </h2>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div class="timeline-line"></div>

          <!-- Experience items -->
          <div class="space-y-12">
            @for (exp of experiences; track exp.company; let i = $index) {
              <div class="timeline-item" [class.timeline-right]="i % 2 !== 0">
                <!-- Timeline dot -->
                <div class="timeline-dot-wrapper">
                  <div class="timeline-dot"></div>
                </div>

                <!-- Content card -->
                <div class="timeline-content card-hover">
                  <!-- Header -->
                  <div class="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-[var(--text-primary)]">{{ exp.role }}</h3>
                      <p class="text-[var(--accent-indigo)] font-semibold">{{ exp.company }}</p>
                    </div>
                    <div class="text-right">
                      <p class="text-[var(--text-muted)] text-sm flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                          <line x1="16" x2="16" y1="2" y2="6"/>
                          <line x1="8" x2="8" y1="2" y2="6"/>
                          <line x1="3" x2="21" y1="10" y2="10"/>
                        </svg>
                        {{ exp.period }}
                      </p>
                      <p class="text-[var(--text-muted)] text-sm flex items-center gap-1 justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {{ exp.location }}
                      </p>
                    </div>
                  </div>

                  <!-- Description -->
                  <ul class="space-y-2 mb-4">
                    @for (item of exp.description; track item) {
                      <li class="flex items-start gap-2 text-[var(--text-secondary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-indigo)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1">
                          <polyline points="9 11 12 14 22 4"/>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                        </svg>
                        <span>{{ item }}</span>
                      </li>
                    }
                  </ul>

                  <!-- Technologies -->
                  <div class="flex flex-wrap gap-2">
                    @for (tech of exp.technologies; track tech) {
                      <span class="tech-tag">{{ tech }}</span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline-item {
      position: relative;
      padding-left: 3rem;
    }

    @media (min-width: 768px) {
      .timeline-item {
        padding-left: 0;
        padding-right: 50%;
      }

      .timeline-item.timeline-right {
        padding-right: 0;
        padding-left: 50%;
      }

      .timeline-item .timeline-content {
        margin-right: 2rem;
      }

      .timeline-item.timeline-right .timeline-content {
        margin-right: 0;
        margin-left: 2rem;
      }
    }

    .timeline-dot-wrapper {
      position: absolute;
      left: 0.5rem;
      top: 0;
      z-index: 10;
    }

    @media (min-width: 768px) {
      .timeline-dot-wrapper {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .timeline-content {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 1.5rem;
    }

    .timeline-content:hover {
      border-color: var(--accent-indigo);
    }

    .tech-tag {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: rgba(99, 102, 241, 0.1);
      color: var(--accent-indigo);
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
    }
  `]
})
export class ExperienceComponent {
  t = inject(TranslationService);

  experiences: Experience[] = [
    {
      company: 'LeadSales',
      role: 'Full Stack Software Developer II',
      period: 'Sep 2021 – Jan 2026',
      location: 'Querétaro, MX',
      description: [
        'Developed key modules for "Leadsales" CRM, enabling seamless multi-channel communication for WhatsApp, Instagram, and Facebook.',
        'Optimized frontend performance by implementing React best practices, reducing load times and improving UX for thousands of concurrent users.',
        'Managed project lifecycles using Disciplined Agile Delivery (DAD), ensuring on-time delivery of complex integrations with social media APIs.',
        'Collaborated cross-functionally to translate business requirements into technical solutions that scaled the platform\'s messaging capacity.'
      ],
      technologies: ['React', 'TypeScript', 'Laravel', 'MySQL', 'WhatsApp API', 'Facebook API', 'Instagram API']
    },
    {
      company: 'GSCOMP',
      role: 'Full Stack Developer',
      period: 'Jun 2018 – Jul 2021',
      location: 'Querétaro, MX',
      description: [
        'Developed and coordinated web applications for networking and telecommunications based on the Laravel framework.',
        'Built dynamic user interfaces using Angular and Vue.js, focusing on data visualization and real-time network monitoring.',
        'Designed and tested UX/UI proposals, increasing user satisfaction scores by streamlining complex configuration workflows.',
        'Led technical support and maintenance for mission-critical networking servers.'
      ],
      technologies: ['Laravel', 'Angular', 'Vue.js', 'PHP', 'MySQL', 'Linux']
    },
    {
      company: 'EcoMaker',
      role: 'Computer Technician',
      period: 'Jan 2017 – Nov 2017',
      location: 'Querétaro, MX',
      description: [
        'Performed maintenance and refurbishment of enterprise-grade servers and hardware.',
        'Provided technical consultancy and customer service regarding hardware optimization.'
      ],
      technologies: ['Hardware', 'Server Maintenance', 'Technical Support']
    }
  ];
}
