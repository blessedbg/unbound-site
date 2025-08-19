import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send } from 'lucide-react';
import { createFAQs } from '../utils/faqUtils';

const FORMSUBMIT_AJAX = 'https://formsubmit.co/ajax/el/goxaya';
const FORMSUBMIT_POST = 'https://formsubmit.co/el/goxaya';

const ChatSupport: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const faqs = createFAQs(t);

  const checkForFAQMatch = (query: string) => {
    const lower = query.toLowerCase();
    const translated =
      i18n.language === 'es'
        ? lower
            .replace(/relación/g, 'relationship')
            .replace(/terapia/g, 'therapy')
            .replace(/resultados/g, 'results')
            .replace(/soltera/g, 'single')
            .replace(/probado/g, 'tried')
        : lower;

    const keywords = ['trauma', 'relationship', 'therapy', 'results', 'single', 'tried'];
    for (const kw of keywords) {
      if (translated.includes(kw)) {
        const match = faqs.find(
          (f) =>
            f.question.toLowerCase().includes(kw) ||
            f.answer.toLowerCase().includes(kw)
        );
        return match || null;
      }
    }
    return null;
  };

  const fallbackSubmit = (payload: Record<string, string>) => {
    const form = document.createElement('form');
    form.action = FORMSUBMIT_POST;
    form.method = 'POST';
    form.target = '_blank';
    form.style.display = 'none';
    Object.entries(payload).forEach(([k, v]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = k;
      input.value = v;
      form.appendChild(input);
    });
    document.body.appendChild(form);
    form.submit();
    form.remove();
  };

  const handleQuickMessage = async (msg: string) => {
    const faqMatch = checkForFAQMatch(msg);
    if (faqMatch) {
      alert(
        `FAQ Match: ${faqMatch.question}\n\n${faqMatch.answer.substring(
          0,
          200
        )}...\n\nFor the full answer, please check our FAQ section below.`
      );
      setIsOpen(false);
    } else {
      setMessage(msg);
      setShowForm(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name,
      email,
      message,
      language: i18n.language,
      _subject: `Support Request from ${name}`,
      _replyto: email,
      _captcha: 'false',
      _template: 'table',
    };

    try {
      // Primary: AJAX JSON to your verified link
      const res = await fetch(FORMSUBMIT_AJAX, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Fallback: standard POST via hidden form (opens new tab)
        fallbackSubmit(payload);
      }

      alert(t('chat.ticketCreated') || "Support ticket created! We'll respond within 24 hours.");
      setIsOpen(false);
      setShowForm(false);
      setMessage('');
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Chat submit error:', err);
      try {
        fallbackSubmit(payload);
        alert(t('chat.ticketCreated') || "Support ticket created! We'll respond within 24 hours.");
        setIsOpen(false);
        setShowForm(false);
        setMessage('');
        setName('');
        setEmail('');
      } catch (innerErr) {
        console.error('Fallback submit error:', innerErr);
        alert(
          t('chat.error') ||
            'Error sending message. Please email support@herlifeunbound.com directly.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 w-14 h-14 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat support"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 w
