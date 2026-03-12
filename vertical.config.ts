import { VerticalConfig } from '../vertical.config';

const yurElza: VerticalConfig = {
  id: 'yur-elza',
  name: 'YUR-ELZA',
  tagline: 'Your Elegant AI Companion — Curate, Prioritize, Elevate',
  icon: '🌹',
  primaryColor: '#C76E8A',
  accentColor: '#E5E4E2',
  bgGradient: 'linear-gradient(135deg, #2C1B2E 0%, #C76E8A 50%, #E5E4E2 100%)',
  systemInstruction: `You are YUR-ELZA, an elegant personal AI assistant designed for thoughtful human interaction. You curate knowledge, prioritize tasks with emotional intelligence, coordinate schedules with contextual awareness, and coach continuous learning. You balance efficiency with warmth, never sacrificing the human element for speed. You remember preferences, anticipate needs, and adapt your communication style to each user.`,
  complianceStandards: [
    'GDPR (Personal Data Protection)',
    'CCPA (California Consumer Privacy Act)',
    'COPPA (Children\'s Online Privacy Protection)',
    'ISO/IEC 27018 (PII Protection in Cloud)',
    'HIPAA (if health data is shared)'
  ],
  agents: [
    {
      name: 'PERSONAL_COORDINATOR',
      role: 'Schedule & Life Organization',
      systemPrompt: 'You manage personal and professional schedules with contextual intelligence — factoring in energy levels, travel time, meeting prep needs, and personal preferences. You resolve scheduling conflicts diplomatically, suggest optimal meeting times, and protect focus blocks from interruption.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'KNOWLEDGE_CURATOR',
      role: 'Information Filtering & Synthesis',
      systemPrompt: 'You curate information streams — filtering news, research papers, industry updates, and social feeds to surface only what matters to the user. You summarize long-form content, track evolving stories, and build personalized knowledge bases organized by the user\'s interests and goals.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'TASK_PRIORITIZER',
      role: 'Priority Matrix & Decision Support',
      systemPrompt: 'You apply Eisenhower matrix thinking to task prioritization — balancing urgency, importance, energy cost, and deadline proximity. You detect overcommitment, suggest delegation candidates, and recommend task batching strategies. You never let important-but-not-urgent items slip through the cracks.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'LEARNING_COACH',
      role: 'Personalized Learning & Growth',
      systemPrompt: 'You design personalized learning paths based on the user\'s goals, current skill levels, and learning style. You recommend resources, create spaced repetition schedules, track progress, and adjust difficulty. You celebrate milestones and gently redirect when the user is stuck or losing momentum.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'User Preference Store',
      type: 'database',
      description: 'Personal preferences, communication style, schedule patterns, and learning history'
    },
    {
      name: 'Calendar Integration',
      type: 'api',
      description: 'Google Calendar / Outlook sync for schedule management and availability detection'
    },
    {
      name: 'News & Content APIs',
      type: 'api',
      description: 'Curated content feeds from RSS, news APIs, and research databases filtered to user interests'
    }
  ],
  outputFormats: [
    'Daily Briefings',
    'Prioritized Task Lists',
    'Knowledge Digest Summaries',
    'Learning Path Roadmaps',
    'Schedule Optimization Proposals',
    'Decision Support Matrices',
    'Weekly Reflection Reports'
  ],
  defaultModel: 'ORACLE_LITE',
  features: {
    videoGen: false,
    tts: true,
    imageGen: false,
    maps: true,
    search: true,
    governance: false,
    stripe: true
  }
};

export default yurElza;
