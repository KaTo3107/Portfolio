import type { Locale } from './index';

interface ContactContent {
  intro: string;
  emailTitle: string;
  emailText: string;
  githubText: string;
}

export const email = 't.karmann@kato3107.de';
export const githubUrl = 'https://github.com/KaTo3107';

export const contact: Record<Locale, ContactContent> = {
  de: {
    intro: 'Ob Stelle, Projekt oder einfach eine Frage: Schreib mir gerne eine E-Mail.',
    emailTitle: 'E-Mail',
    emailText: 'Am besten erreichst du mich per E-Mail.',
    githubText: 'Hier findest du meine aktuellen Projekte und meinen Code.'
  },
  en: {
    intro: 'Whether it is a job, a project or just a question: feel free to send me an email.',
    emailTitle: 'Email',
    emailText: 'Email is the best way to reach me.',
    githubText: 'This is where you can find my current projects and code.'
  }
};
