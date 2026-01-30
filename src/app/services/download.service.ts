import { Injectable } from '@angular/core';

export interface ContactInfo {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  
  private contactInfo: ContactInfo = {
    firstName: 'Jose Carlos',
    lastName: 'Pacheco Sanchez',
    title: 'Fullstack Software Developer',
    email: 'Josecarlospas1@gmail.com',
    phone: '+52 427 427 7200',
    location: 'Querétaro, México',
    linkedin: 'https://www.linkedin.com/in/jose-carlos-pacheco-sanchezisc/',
    github: 'https://github.com/JoseCarlosPa'
  };

  /**
   * Downloads the CV PDF file
   */
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/Jose Carlos Pacheco Sanchez - CV.pdf';
    link.download = 'Jose_Carlos_Pacheco_Sanchez_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Downloads contact information as a vCard file (.vcf)
   * VCards are automatically recognized by mobile devices for saving contacts
   */
  downloadVCard(): void {
    const vCard = this.generateVCard();
    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jose_Carlos_Pacheco_Sanchez.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    URL.revokeObjectURL(url);
  }

  /**
   * Generates a vCard 3.0 format string
   */
  private generateVCard(): string {
    const { firstName, lastName, title, email, phone, location, linkedin, github } = this.contactInfo;
    
    // vCard 3.0 format
    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${lastName};${firstName};;;`,
      `FN:${firstName} ${lastName}`,
      `TITLE:${title}`,
      `EMAIL;TYPE=INTERNET,WORK:${email}`,
      `TEL;TYPE=CELL:${phone}`,
      `ADR;TYPE=WORK:;;${location};;;;`,
      `URL;TYPE=LinkedIn:${linkedin}`,
      `URL;TYPE=GitHub:${github}`,
      `NOTE:Fullstack Developer specializing in React, Laravel, and modern web technologies.`,
      `REV:${new Date().toISOString()}`,
      'END:VCARD'
    ].join('\r\n');

    return vCard;
  }

  /**
   * Get contact information
   */
  getContactInfo(): ContactInfo {
    return { ...this.contactInfo };
  }
}
