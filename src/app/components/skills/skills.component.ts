import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface SkillCategory {
  title: string;
  titleKey: string;
  icon: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon?: string;
  level?: number; // 1-5
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  t = inject(TranslationService);

  skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      titleKey: 'skills.languages',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
      skills: [
        { name: 'PHP', level: 5 },
        { name: 'JavaScript/TypeScript', level: 5 },
        { name: 'HTML5/CSS3', level: 5 },
        { name: 'Python', level: 3 },
        { name: 'Go', level: 2 },
        { name: 'C/C++', level: 3 }
      ]
    },
    {
      title: 'Frontend',
      titleKey: 'skills.frontend',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
      skills: [
        { name: 'React', level: 5 },
        { name: 'Tailwind CSS', level: 5 },
        { name: 'Angular', level: 4 },
        { name: 'Vue.js', level: 3 },
        { name: 'Responsive Design', level: 5 }
      ]
    },
    {
      title: 'Backend & Database',
      titleKey: 'skills.backend',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>',
      skills: [
        { name: 'Laravel', level: 5 },
        { name: 'MySQL', level: 5 },
        { name: 'PostgreSQL', level: 4 },
        { name: 'MongoDB', level: 3 },
        { name: 'REST APIs', level: 5 }
      ]
    },
    {
      title: 'Tools & Platforms',
      titleKey: 'skills.tools',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      skills: [
        { name: 'Git/GitHub', level: 5 },
        { name: 'Docker', level: 4 },
        { name: 'AWS', level: 3 },
        { name: 'Linux', level: 4 }
      ]
    },
    {
      title: 'Soft Skills',
      titleKey: 'skills.soft',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      skills: [
        { name: 'Technical Leadership', level: 4 },
        { name: 'Critical Thinking', level: 5 },
        { name: 'Project Management', level: 4 },
        { name: 'Agile Methodologies', level: 5 }
      ]
    }
  ];
}
