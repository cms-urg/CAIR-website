export const SITE = {
  name: 'Conversational AI Research Lab',
  short: 'CAIR',
  description:
    'An interdisciplinary research lab at the University of Toronto Scarborough studying how conversational AI agents can be built to be safer, more human, and genuinely useful where ordinary chatbots fall short.',
  institution: 'University of Toronto Scarborough',
  email: 'brian.harrington@utoronto.ca',
  linkedin: 'https://www.linkedin.com/company/conversationalairesearchgroup/',
  github: 'https://github.com/cms-urg',
};

export const NAV = [
  { href: 'research', label: 'Research' },
  { href: 'publications', label: 'Publications' },
  { href: 'articles', label: 'Articles' },
  { href: 'people', label: 'People' },
  { href: 'contact', label: 'Contact' },
];

export type ThemeId = 'guardrails' | 'cognition' | 'applications';

export const THEMES: {
  id: ThemeId;
  number: string;
  title: string;
  lede: string;
  questions: string[];
}[] = [
  {
    id: 'guardrails',
    number: '01',
    title: 'Possibilities, Harms & Guardrails',
    lede:
      'Agents that hold a conversation are different from tools that answer a query. They build rapport, persuade, and can be leaned on. We study what conversational agents make possible, where they cause harm, and which guardrails actually work.',
    questions: [
      'How do sycophancy, over-reliance, and emotional dependence emerge over multi-turn interaction?',
      'What guardrails protect users without hollowing out the conversation?',
      'How do people across cultures judge what counts as appropriate use of conversational AI?',
    ],
  },
  {
    id: 'cognition',
    number: '02',
    title: 'Human-like Agents, Grounded in Cognitive Science',
    lede:
      'Today’s chatbots often respond, remember, and forget in ways no attentive person would. We draw on decades of research on human memory, attention, and dialogue to build agents that behave and react in more human ways.',
    questions: [
      'Which models of human memory and consciousness can inform how agents remember, forget, and recall?',
      'How should an agent pace a conversation, interrupt, ask, and wait?',
      'Can agents be designed to build human connection rather than replace it?',
    ],
  },
  {
    id: 'applications',
    number: '03',
    title: 'Where Ordinary Chatbots Fall Short',
    lede:
      'Some of the most valuable uses of conversation are poorly served by general-purpose LLM chat. We build and evaluate agents for settings that demand structure, fidelity, and accountability.',
    questions: [
      'Conversational simulation: realistic role-play partners for practice and research.',
      'Conversational assessment: AI-facilitated oral examinations that scale authentic evaluation.',
      'Assessment of learning: probing understanding through dialogue rather than multiple choice.',
      'High-stakes conversational training: rehearsing difficult conversations before they happen for real.',
    ],
  },
];
