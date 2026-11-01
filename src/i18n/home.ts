import type { Locale } from './index';

interface HomeContent {
  eyebrow: string;
  codeEnjoys: string;
  focusTitle: string;
  focusAreas: { title: string; text: string }[];
}

export const home: Record<Locale, HomeContent> = {
  de: {
    eyebrow: 'Softwareentwickler · C# / .NET',
    codeEnjoys: 'Abläufe automatisieren',
    focusTitle: 'Woran ich gerne arbeite',
    focusAreas: [
      {
        title: 'Backend & Schnittstellen',
        text: 'Anwendungen mit ASP.NET, gRPC und MSSQL, zum Beispiel eine Schnittstelle von einem ERP-System zu DATEV.'
      },
      {
        title: 'Automatisierung',
        text: 'Abläufe, die ohne Handarbeit laufen, zum Beispiel die automatische Bestandsauffüllung eines Ladenlokals.'
      }
    ]
  },
  en: {
    eyebrow: 'Software Developer · C# / .NET',
    codeEnjoys: 'Automating processes',
    focusTitle: 'What I enjoy working on',
    focusAreas: [
      {
        title: 'Backend & interfaces',
        text: 'Applications with ASP.NET, gRPC and MSSQL, for example an interface from an ERP system to DATEV.'
      },
      {
        title: 'Automation',
        text: 'Processes that run without manual work, for example automatic stock replenishment for a store.'
      }
    ]
  }
};
