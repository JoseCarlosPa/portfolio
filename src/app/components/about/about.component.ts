import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section bg-[var(--bg-secondary)]">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="section-title">
            <span class="text-gradient">{{ t.t('about.title') }}</span>
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Description -->
          <div class="animate-fade-in-up">
            <p class="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              {{ t.t('about.description') }}
            </p>

            <!-- Tech Stack Pills -->
            <div class="flex flex-wrap gap-3">
              @for (tech of mainTechs; track tech) {
                <span class="skill-badge">{{ tech }}</span>
              }
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-fade-in-up delay-200">
            <!-- Years Experience -->
            <div class="stat-card">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div class="stat-value">6+</div>
              <div class="stat-label">{{ t.t('about.yearsExp') }}</div>
            </div>

            <!-- Projects -->
            <div class="stat-card">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div class="stat-value">40+</div>
              <div class="stat-label">{{ t.t('about.projects') }}</div>
            </div>

            <!-- Technologies -->
            <div class="stat-card col-span-2 sm:col-span-1">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div class="stat-value">15+</div>
              <div class="stat-label">{{ t.t('about.technologies') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stat-card {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 1.5rem;
      text-align: center;
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      border-color: var(--accent-indigo);
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .stat-icon {
      width: 3rem;
      height: 3rem;
      margin: 0 auto 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gradient-primary);
      border-radius: 0.75rem;
      color: white;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--text-muted);
    }
  `]
})
export class AboutComponent {
  t = inject(TranslationService);

  mainTechs = [
    'React',
    'Angular',
    'TypeScript',
    'PHP/Laravel',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Docker',
    'AWS'
  ];
}
