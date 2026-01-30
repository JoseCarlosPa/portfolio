import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface Certification {
  title: string;
  titleEs: string;
  issuer: string;
  date?: string;
  link?: string;
  icon?: string;
}

interface Award {
  title: string;
  titleEs: string;
  event: string;
  year: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  t = inject(TranslationService);

  certifications: Certification[] = [
    {
      title: 'CISCO NetAcad Linux Certification',
      titleEs: 'Certificación Linux CISCO NetAcad',
      issuer: 'CISCO Networking Academy',
      link: '' // Placeholder for user to add link
    },
    {
      title: 'CCNA Introduction to Networks',
      titleEs: 'CCNA Introducción a Redes',
      issuer: 'CISCO',
      link: '' // Placeholder for user to add link
    },
    {
      title: 'Pre-hospital Emergency Medical Technician (Intermediate)',
      titleEs: 'Técnico en Urgencias Médicas Prehospitalarias (Intermedio)',
      issuer: 'Certified'
    }
  ];

  awards: Award[] = [
    {
      title: 'Best Computer Organization Project',
      titleEs: 'Mejor Proyecto de Organización Computacional',
      event: 'Expo Engineers ITESM',
      year: '2021'
    },
    {
      title: 'Best Computer Organization Project',
      titleEs: 'Mejor Proyecto de Organización Computacional',
      event: 'Expo Engineers ITESM',
      year: '2018'
    }
  ];
}
