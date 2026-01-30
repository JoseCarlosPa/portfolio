import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  t = inject(TranslationService);
  download = inject(DownloadService);
}
