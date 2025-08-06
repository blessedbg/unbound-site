import { TFunction } from 'i18next';

export const createFAQs = (t: TFunction) => [
  {
    question: t('faq.questions.trauma.question') || 'Will this reopen trauma?',
    answer: t('faq.questions.trauma.answer') || ''
  },
  {
    question: t('faq.questions.relationship.question') || 'Does this work if I\'m in a relationship?',
    answer: t('faq.questions.relationship.answer') || ''
  },
  {
    question: t('faq.questions.therapy.question') || 'Is this just therapy?',
    answer: t('faq.questions.therapy.answer') || ''
  },
  {
    question: t('faq.questions.results.question') || 'How soon will I see results?',
    answer: t('faq.questions.results.answer') || ''
  },
  {
    question: t('faq.questions.single.question') || 'Do I need to be dating?',
    answer: t('faq.questions.single.answer') || ''
  },
  {
    question: t('faq.questions.tried.question') || 'What if nothing has worked?',
    answer: t('faq.questions.tried.answer') || ''
  }
];