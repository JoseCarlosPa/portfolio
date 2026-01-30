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
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
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
