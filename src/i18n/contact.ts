import type { Locale } from './index';

interface ContactContent {
  intro: string;
  githubText: string;
}

export const contact: Record<Locale, ContactContent> = {
  de: {
    intro: 'Du suchst einen C#/.NET-Entwickler oder hast eine Idee, bei der sich Abläufe automatisieren lassen? Dann schreib mir gerne.',
    githubText: 'Meinen Code findest du auf GitHub'
  },
  en: {
    intro: 'Looking for a C#/.NET developer or have an idea for automating a process? Feel free to get in touch.',
    githubText: 'You can find my code on GitHub'
  }
};
