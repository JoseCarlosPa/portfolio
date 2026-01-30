import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
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
