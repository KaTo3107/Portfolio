import type { Locale } from './index';

interface TimelineEntry {
  period: string;
  title: string;
  company: string;
  details?: string[];
  techStack?: string[];
}

interface AboutContent {
  intro: string;
  experienceTitle: string;
  educationTitle: string;
  coreSkillsTitle: string;
  otherSkillsTitle: string;
  strengthsTitle: string;
  techStackLabel: string;
  experience: TimelineEntry[];
  education: TimelineEntry[];
  strengths: string[];
}

export const coreSkills = ['C#', '.NET', 'ASP.NET', 'SQL', 'MSSQL', 'Git', 'Entity Framework', 'gRPC'];

export const otherSkills = [
  'JavaScript',
  'HTML',
  'CSS',
  'Java',
  'React',
  'React Native',
  'Node.js',
  '.NET MAUI',
  'NUnit',
  'Blazor',
  'Azure DevOps'
];

export const about: Record<Locale, AboutContent> = {
  de: {
    intro:
      'Angefangen habe ich mit eigenen Plugins für einen Minecraft-Server. Heute entwickle ich Software mit C# und .NET, am liebsten dort, wo sich Abläufe vereinfachen oder automatisieren lassen, etwa bei einer automatischen Bestandsauffüllung oder einer ERP-zu-DATEV-Schnittstelle. Auch privat baue ich weiter, zum Beispiel eine App, die Systemdaten meines PCs auf dem Handy anzeigt.',
    experienceTitle: 'Berufserfahrung',
    educationTitle: 'Ausbildung',
    coreSkillsTitle: 'Kernkompetenzen',
    otherSkillsTitle: 'Weitere Kenntnisse',
    strengthsTitle: 'Stärken',
    techStackLabel: 'Techstack',
    experience: [
      {
        period: '12.2024 – 02.2026',
        title: 'Agile Developer',
        company: 'Iucon GmbH',
        details: [
          'Entwicklung eines Systems zur automatischen Bestandsauffüllung des Ladenlokals.',
          'Konzeption und Implementierung einer ERP-zu-DATEV-Schnittstelle.',
          'Mitgestaltung der Azure-DevOps-Umgebung sowie Anpassung von CI/CD-Pipelines (YAML).'
        ],
        techStack: ['MSSQL', 'ASP.NET', 'gRPC', 'Azure DevOps', 'CI/CD', 'Entity Framework']
      },
      {
        period: '06.2024 – 11.2024',
        title: 'Softwareentwickler',
        company: 'PROSOZ Herten GmbH',
        details: [
          'Weiterentwicklung eines Bestandsprodukts im Bereich Zahlbarmachung mit C# und WPF.',
          'Portierung bestehender Softwarebestandteile von Visual Basic nach C#.'
        ],
        techStack: ['C#', 'WPF']
      }
    ],
    education: [
      {
        period: '09.2021 – 06.2024',
        title: 'Fachinformatiker für Anwendungsentwicklung',
        company: 'PROSOZ Herten GmbH'
      },
      {
        period: '08.2018 – 07.2021',
        title: 'Informationstechnischer Assistent und Fachhochschulreife',
        company: 'Berufskolleg Ostvest'
      },
      {
        period: '08.2012 – 07.2018',
        title: 'Mittlere Reife',
        company: 'Gesamtschule Waltrop'
      }
    ],
    strengths: ['Schnelle Auffassungsgabe', 'Eigenständiges Arbeiten', 'Lernbereitschaft']
  },
  en: {
    intro:
      'I started out writing my own plugins for a Minecraft server. Today I build software with C# and .NET, ideally where processes can be simplified or automated, such as automatic stock replenishment or an ERP-to-DATEV interface. I keep building in my own time too, for example an app that shows my PC\'s system data on my phone.',
    experienceTitle: 'Work experience',
    educationTitle: 'Education',
    coreSkillsTitle: 'Core skills',
    otherSkillsTitle: 'Other skills',
    strengthsTitle: 'Strengths',
    techStackLabel: 'Tech stack',
    experience: [
      {
        period: '12/2024 – 02/2026',
        title: 'Agile Developer',
        company: 'Iucon GmbH',
        details: [
          'Developed a system for automatically replenishing in-store stock.',
          'Designed and implemented an ERP-to-DATEV interface.',
          'Helped shape the Azure DevOps environment and adapted CI/CD pipelines (YAML).'
        ],
        techStack: ['MSSQL', 'ASP.NET', 'gRPC', 'Azure DevOps', 'CI/CD', 'Entity Framework']
      },
      {
        period: '06/2024 – 11/2024',
        title: 'Software Developer',
        company: 'PROSOZ Herten GmbH',
        details: [
          'Continued development of an established payment processing product with C# and WPF.',
          'Ported existing software components from Visual Basic to C#.'
        ],
        techStack: ['C#', 'WPF']
      }
    ],
    education: [
      {
        period: '09/2021 – 06/2024',
        title: 'Apprenticeship as an IT specialist for application development',
        company: 'PROSOZ Herten GmbH'
      },
      {
        period: '08/2018 – 07/2021',
        title: 'Information technology assistant and university of applied sciences entrance qualification',
        company: 'Berufskolleg Ostvest'
      },
      {
        period: '08/2012 – 07/2018',
        title: 'Intermediate school-leaving certificate',
        company: 'Gesamtschule Waltrop'
      }
    ],
    strengths: ['Quick to grasp new topics', 'Independent working style', 'Eager to learn']
  }
};
