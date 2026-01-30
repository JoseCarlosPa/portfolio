import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  t = inject(TranslationService);
  download = inject(DownloadService);
}
