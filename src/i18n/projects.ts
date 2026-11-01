import type { Locale } from './index';

interface ProjectText {
  status: string;
  description: string;
  linkLabels: string[];
}

interface ProjectsContent {
  intro: string;
  items: Record<string, ProjectText>;
}

export const projects = [
  {
    id: 'greenPill',
    name: 'Green Pill',
    techStack: ['Flutter', 'Dart', 'Matrix'],
    links: ['https://github.com/KaTo3107/green_pill']
  },
  {
    id: 'connectivityPc',
    name: 'ConnectivityPC',
    techStack: ['React Native', 'Node.js', 'C#'],
    links: [
      'https://github.com/Tobias3107/ConnectivityPC',
      'https://github.com/Tobias3107/ConnectivityPC-Server',
      'https://github.com/Tobias3107/CPUInfoServerCoreTemp'
    ]
  },
  {
    id: 'learnForAzubi',
    name: 'LearnForAzubi',
    techStack: ['C#', 'TypeScript'],
    links: ['https://github.com/Tobias3107/LearnForAzubi']
  }
];

export const projectsContent: Record<Locale, ProjectsContent> = {
  de: {
    intro: 'Eine Auswahl meiner eigenen Projekte und Projekte aus der Ausbildung.',
    items: {
      connectivityPc: {
        status: 'Privates Projekt',
        description:
          'Eine mobile App, die Speicher, CPU-Auslastung, CPU-Temperatur und RAM-Nutzung eines PCs anzeigt. Die Daten liefert ein Node.js-Server, die Temperaturwerte kommen von einem eigenen C#-Plugin für Core Temp.',
        linkLabels: ['App', 'Server', 'Core-Temp-Plugin']
      },
      greenPill: {
        status: 'In Entwicklung',
        description:
          'Eine Open-Source-Chat-App auf Basis von Matrix. Ich entwickle sie weiter und möchte sie später veröffentlichen.',
        linkLabels: ['Repository']
      },
      learnForAzubi: {
        status: 'Schulprojekt',
        description: 'Eine Anwendung, die ich während meiner Ausbildung für schulische Zwecke erstellt habe.',
        linkLabels: ['Repository']
      }
    }
  },
  en: {
    intro: 'A selection of my personal projects and projects from my apprenticeship.',
    items: {
      connectivityPc: {
        status: 'Personal project',
        description:
          "A mobile app that shows a PC's storage, CPU usage, CPU temperature and RAM usage. A Node.js server provides the data, and the temperature values come from my own C# plugin for Core Temp.",
        linkLabels: ['App', 'Server', 'Core Temp plugin']
      },
      greenPill: {
        status: 'In development',
        description:
          'An open source chat app based on Matrix. I am continuing to develop it and plan to release it later.',
        linkLabels: ['Repository']
      },
      learnForAzubi: {
        status: 'School project',
        description: 'An application I built for school purposes during my apprenticeship.',
        linkLabels: ['Repository']
      }
    }
  }
};
